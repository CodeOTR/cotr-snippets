import {
  authentication,
  AuthenticationProvider,
  AuthenticationProviderAuthenticationSessionsChangeEvent,
  AuthenticationSession,
  Disposable,
  env,
  EventEmitter,
  ExtensionContext,
  ProgressLocation,
  Uri,
  UriHandler,
  window,
} from "vscode";
import { v4 as uuid } from "uuid";
import { PromiseAdapter, promiseFromEvent } from "./util";
import { supabase } from "./supabase";

export const AUTH_TYPE = `supabase`;
const AUTH_NAME = `Supabase`;
const CLIENT_ID = `3GUryQ7ldAeKEuD2obYnppsnmj58eP5u`;
const AUTHORIZE_URL = `https://cotr.dev/authorize`;
const SESSIONS_SECRET_KEY = `${AUTH_TYPE}.sessions`;

// vscode://<publisher>.<extension-name>
// vscode-insider://<publisher>.<extension-name>
// vscode://CodeontheRocks.cotr-chat
// vscode-insider://CodeontheRocks.cotr-chat
class UriEventHandler extends EventEmitter<Uri> implements UriHandler {
  public handleUri(uri: Uri) {
    this.fire(uri);
  }
}

export class SupabaseAuthenticationProvider
  implements AuthenticationProvider, Disposable
{
  private _sessionChangeEmitter =
    new EventEmitter<AuthenticationProviderAuthenticationSessionsChangeEvent>();
  private _disposable: Disposable;
  private _pendingStates: string[] = [];
  private _codeExchangePromises = new Map<
    string,
    { promise: Promise<string>; cancel: EventEmitter<void> }
  >();
  private _uriHandler = new UriEventHandler();

  constructor(private readonly context: ExtensionContext) {
    this._disposable = Disposable.from(
      authentication.registerAuthenticationProvider(
        AUTH_TYPE,
        AUTH_NAME,
        this,
        { supportsMultipleAccounts: false }
      ),
      window.registerUriHandler(this._uriHandler) // Register the URI handler
    );
  }

  get redirectUri() {
    const publisher = "CodeontheRocks"; // this.context.extension.packageJSON.publisher;
    const name = this.context.extension.packageJSON.name;
    return `${env.uriScheme}://${publisher}.${name}`;
  }

  get onDidChangeSessions() {
    return this._sessionChangeEmitter.event;
  }

  public async initialize() {
    try {
      const refresh = await this.context.secrets.get("refresh_token");

      if (refresh) {
        supabase.auth.refreshSession({
          refresh_token: refresh,
        });
      }
      const session = await supabase.auth.getSession();
      console.log("Session: ", session);
      const sessions = await this.getSessions();
      this._sessionChangeEmitter.fire({
        added: sessions,
        removed: [],
        changed: [],
      });
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Get the existing sessions
   * @returns
   */
  public async getSessions(): Promise<readonly AuthenticationSession[]> {
    const allSessions = await this.context.secrets.get(SESSIONS_SECRET_KEY);

    if (allSessions) {
      return JSON.parse(allSessions) as AuthenticationSession[];
    }

    return [];
  }

  /**
   * Create a new auth session
   * @param scopes
   * @returns
   */
  public async createSession(): Promise<AuthenticationSession> {
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

      await supabase.auth.setSession({
        access_token: token,
        refresh_token: refresh_token!,
      });
      console.log("Token: ", token);
      const userinfo: { username: string; email: string } =
        await this.getUserInfo(token);

      console.log("User Info: ", userinfo);

      const session: AuthenticationSession = {
        id: uuid(),
        accessToken: token,
        account: {
          label: userinfo.email,
          id: userinfo.email,
        },
        scopes: [],
      };

      await this.context.secrets.store(
        SESSIONS_SECRET_KEY,
        JSON.stringify([session])
      );

      this._sessionChangeEmitter.fire({
        added: [session],
        removed: [],
        changed: [],
      });

      return session;
    } catch (e) {
      window.showErrorMessage(`Sign in failed: ${e}`);
      throw e;
    }
  }

  private async login() {
    return await window.withProgress<string>(
      {
        location: ProgressLocation.Notification,
        title: "Signing in to Supabase...",
        cancellable: true,
      },
      async (_, token) => {
        const stateId = uuid();

        this._pendingStates.push(stateId);

        const searchParams = new URLSearchParams([
          ["response_type", "token"],
          ["client_id", CLIENT_ID],
          ["redirect_uri", this.redirectUri],
          ["state_id", stateId],
          ["prompt", "login"],
        ]);
        const uri = Uri.parse(`${AUTHORIZE_URL}?${searchParams.toString()}`);
        await env.openExternal(uri);

        let codeExchangePromise = this._codeExchangePromises.get("login");
        if (!codeExchangePromise) {
          codeExchangePromise = promiseFromEvent(
            this._uriHandler.event,
            this.handleUri()
          );
          this._codeExchangePromises.set("login", codeExchangePromise!);
        }

        try {
          return await Promise.race([
            codeExchangePromise!.promise,
            new Promise<string>((_, reject) =>
              setTimeout(() => reject("Cancelled"), 60000)
            ),
            promiseFromEvent<any, any>(
              token.onCancellationRequested,
              (_: any, __: any, reject: (arg0: string) => void) => {
                reject("User Cancelled");
              }
            ).promise,
          ]);
        } finally {
          this._pendingStates = this._pendingStates.filter(
            (n) => n !== stateId
          );
          codeExchangePromise?.cancel.fire();
          this._codeExchangePromises.delete("login");
        }
      }
    );
  }

  /**
   * Handle the redirect to VS Code (after sign in from Supabase)
   * @param scopes
   * @returns
   */
  private handleUri: () => PromiseAdapter<Uri, string> =
    () => async (uri, resolve, reject) => {
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
        await this.context.secrets.store("refresh_token", refresh_token!);
      }

      if (access_token) {
        await this.context.secrets.store("access_token", access_token!);
      }

      resolve(access_token);
    };

  public async logOut(): Promise<void> {
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
  public async removeSession(sessionId: string): Promise<void> {
    const allSessions = await this.context.secrets.get(SESSIONS_SECRET_KEY);
    if (allSessions) {
      let sessions = JSON.parse(allSessions) as AuthenticationSession[];
      const sessionIdx = sessions.findIndex((s) => s.id === sessionId);
      const session = sessions[sessionIdx];
      sessions.splice(sessionIdx, 1);

      await this.context.secrets.store(
        SESSIONS_SECRET_KEY,
        JSON.stringify(sessions)
      );

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
  public async dispose() {
    this._disposable.dispose();
  }

  public async getAuthToken() {
    const session = await this.context.secrets.get(SESSIONS_SECRET_KEY);
    if (session) {
      const sessions = JSON.parse(session) as AuthenticationSession[];
      return sessions[0].accessToken;
    }
  }

  /**
   * Get the user info from Supabase
   * @param token
   * @returns
   */
  private async getUserInfo(token: string): Promise<{
    username: string;
    email: string;
  }> {
    const user = await supabase.auth.getUser(token);

    const response = await supabase
      .from("users")
      .select("*")
      .eq("id", user.data.user?.id)
      .single();
    return (await response.data) as { username: string; email: string };
  }

  public async getSecrets() {
    const sessions = await this.context.secrets.get(SESSIONS_SECRET_KEY);
    console.log("Sessions: ", sessions);
    const refresh = await this.context.secrets.get("refresh_token");
    console.log("Refresh: ", refresh);
  }
}
