"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupabaseAuthenticationProvider = exports.AUTH_TYPE = void 0;
const vscode_1 = require("vscode");
const uuid_1 = require("uuid");
const util_1 = require("./util");
const supabase_1 = require("./supabase");
exports.AUTH_TYPE = `supabase`;
const AUTH_NAME = `Supabase`;
const CLIENT_ID = `3GUryQ7ldAeKEuD2obYnppsnmj58eP5u`;
const AUTHORIZE_URL = `https://cotr.dev/authorize`;
const SESSIONS_SECRET_KEY = `${exports.AUTH_TYPE}.sessions`;
// vscode://<publisher>.<extension-name>
// vscode-insider://<publisher>.<extension-name>
// vscode://CodeontheRocks.cotr-chat
// vscode-insider://CodeontheRocks.cotr-chat
class UriEventHandler extends vscode_1.EventEmitter {
    handleUri(uri) {
        this.fire(uri);
    }
}
class SupabaseAuthenticationProvider {
    context;
    _sessionChangeEmitter = new vscode_1.EventEmitter();
    _disposable;
    _pendingStates = [];
    _codeExchangePromises = new Map();
    _uriHandler = new UriEventHandler();
    constructor(context) {
        this.context = context;
        this._disposable = vscode_1.Disposable.from(vscode_1.authentication.registerAuthenticationProvider(exports.AUTH_TYPE, AUTH_NAME, this, { supportsMultipleAccounts: false }), vscode_1.window.registerUriHandler(this._uriHandler) // Register the URI handler
        );
    }
    get redirectUri() {
        const publisher = "CodeontheRocks"; // this.context.extension.packageJSON.publisher;
        const name = this.context.extension.packageJSON.name;
        return `${vscode_1.env.uriScheme}://${publisher}.${name}`;
    }
    get onDidChangeSessions() {
        return this._sessionChangeEmitter.event;
    }
    async initialize() {
        try {
            const refresh = await this.context.secrets.get("refresh_token");
            if (refresh) {
                supabase_1.supabase.auth.refreshSession({
                    refresh_token: refresh,
                });
            }
            const session = await supabase_1.supabase.auth.getSession();
            console.log("Session: ", session);
            const sessions = await this.getSessions();
            this._sessionChangeEmitter.fire({
                added: sessions,
                removed: [],
                changed: [],
            });
        }
        catch (e) {
            console.error(e);
        }
    }
    /**
     * Get the existing sessions
     * @returns
     */
    async getSessions() {
        const allSessions = await this.context.secrets.get(SESSIONS_SECRET_KEY);
        if (allSessions) {
            return JSON.parse(allSessions);
        }
        return [];
    }
    /**
     * Create a new auth session
     * @param scopes
     * @returns
     */
    async createSession() {
        const sessions = await this.getSessions();
        if (sessions.length > 0) {
            console.log("Existing session: ", sessions[0]);
            await this.context.secrets.store("access_token", sessions[0].accessToken);
            return sessions[0];
        }
        try {
            const token = await this.login();
            if (!token) {
                throw new Error(`Supabase login failure`);
            }
            const refresh_token = await this.context.secrets.get("refresh_token");
            await supabase_1.supabase.auth.setSession({
                access_token: token,
                refresh_token: refresh_token,
            });
            console.log("Token: ", token);
            const userinfo = await this.getUserInfo(token);
            console.log("User Info: ", userinfo);
            const session = {
                id: (0, uuid_1.v4)(),
                accessToken: token,
                account: {
                    label: userinfo.email,
                    id: userinfo.email,
                },
                scopes: [],
            };
            await this.context.secrets.store(SESSIONS_SECRET_KEY, JSON.stringify([session]));
            this._sessionChangeEmitter.fire({
                added: [session],
                removed: [],
                changed: [],
            });
            return session;
        }
        catch (e) {
            vscode_1.window.showErrorMessage(`Sign in failed: ${e}`);
            throw e;
        }
    }
    async login() {
        return await vscode_1.window.withProgress({
            location: vscode_1.ProgressLocation.Notification,
            title: "Signing in to Supabase...",
            cancellable: true,
        }, async (_, token) => {
            const stateId = (0, uuid_1.v4)();
            this._pendingStates.push(stateId);
            const searchParams = new URLSearchParams([
                ["response_type", "token"],
                ["client_id", CLIENT_ID],
                ["redirect_uri", this.redirectUri],
                ["state_id", stateId],
                ["prompt", "login"],
            ]);
            const uri = vscode_1.Uri.parse(`${AUTHORIZE_URL}?${searchParams.toString()}`);
            await vscode_1.env.openExternal(uri);
            let codeExchangePromise = this._codeExchangePromises.get("login");
            if (!codeExchangePromise) {
                codeExchangePromise = (0, util_1.promiseFromEvent)(this._uriHandler.event, this.handleUri());
                this._codeExchangePromises.set("login", codeExchangePromise);
            }
            try {
                return await Promise.race([
                    codeExchangePromise.promise,
                    new Promise((_, reject) => setTimeout(() => reject("Cancelled"), 60000)),
                    (0, util_1.promiseFromEvent)(token.onCancellationRequested, (_, __, reject) => {
                        reject("User Cancelled");
                    }).promise,
                ]);
            }
            finally {
                this._pendingStates = this._pendingStates.filter((n) => n !== stateId);
                codeExchangePromise?.cancel.fire();
                this._codeExchangePromises.delete("login");
            }
        });
    }
    /**
     * Handle the redirect to VS Code (after sign in from Supabase)
     * @param scopes
     * @returns
     */
    handleUri = () => async (uri, resolve, reject) => {
        const query = new URLSearchParams(uri.query);
        const access_token = query.get("access_token");
        const refresh_token = query.get("refresh_token");
        const state = query.get("state");
        console.log("Query:", query);
        if (!access_token) {
            reject(new Error("No token"));
            return;
        }
        if (!state) {
            reject(new Error("No state"));
            return;
        }
        // Check if it is a valid auth request started by the extension
        if (!this._pendingStates.some((n) => n === state)) {
            reject(new Error("State not found"));
            return;
        }
        if (refresh_token) {
            await this.context.secrets.store("refresh_token", refresh_token);
        }
        if (access_token) {
            await this.context.secrets.store("access_token", access_token);
        }
        resolve(access_token);
    };
    async logOut() {
        const sessions = await this.getSessions();
        await this.context.secrets.delete(SESSIONS_SECRET_KEY);
        this._sessionChangeEmitter.fire({
            added: [],
            removed: sessions,
            changed: [],
        });
    }
    /**
     * Remove an existing session
     * @param sessionId
     */
    async removeSession(sessionId) {
        const allSessions = await this.context.secrets.get(SESSIONS_SECRET_KEY);
        if (allSessions) {
            let sessions = JSON.parse(allSessions);
            const sessionIdx = sessions.findIndex((s) => s.id === sessionId);
            const session = sessions[sessionIdx];
            sessions.splice(sessionIdx, 1);
            await this.context.secrets.store(SESSIONS_SECRET_KEY, JSON.stringify(sessions));
            if (session) {
                this._sessionChangeEmitter.fire({
                    added: [],
                    removed: [session],
                    changed: [],
                });
            }
        }
    }
    /**
     * Dispose the registered services
     */
    async dispose() {
        this._disposable.dispose();
    }
    async getAuthToken() {
        const session = await this.context.secrets.get(SESSIONS_SECRET_KEY);
        if (session) {
            const sessions = JSON.parse(session);
            return sessions[0].accessToken;
        }
    }
    /**
     * Get the user info from Supabase
     * @param token
     * @returns
     */
    async getUserInfo(token) {
        const user = await supabase_1.supabase.auth.getUser(token);
        const response = await supabase_1.supabase
            .from("users")
            .select("*")
            .eq("id", user.data.user?.id)
            .single();
        return (await response.data);
    }
    async getSecrets() {
        const sessions = await this.context.secrets.get(SESSIONS_SECRET_KEY);
        console.log("Sessions: ", sessions);
        const refresh = await this.context.secrets.get("refresh_token");
        console.log("Refresh: ", refresh);
    }
}
exports.SupabaseAuthenticationProvider = SupabaseAuthenticationProvider;
//# sourceMappingURL=authentication.js.map