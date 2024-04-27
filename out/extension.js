"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const vscodeUtils_1 = require("./vscodeUtils");
const authentication_1 = require("./authentication");
function activate(context) {
    const command = "cotr.saveSnippet";
    const commandHandler = () => {
        const selection = (0, vscodeUtils_1.getEditorSelection)();
        console.log(selection);
        vscode.env.openExternal(vscode.Uri.parse("https://cotr.dev/snippet/new?code=" +
            encodeURIComponent(selection ?? "")));
    };
    context.subscriptions.push(vscode.commands.registerCommand(command, commandHandler));
    const supabaseAuthProvider = new authentication_1.SupabaseAuthenticationProvider(context);
    const loginCommand = vscode.commands.registerCommand("cotr.logIn", async () => {
        try {
            const session = await supabaseAuthProvider.createSession();
            vscode.window.showInformationMessage(`Logged in as ${session.account.label}`);
        }
        catch (error) {
            vscode.window.showErrorMessage(`Login failed: ${error}`);
        }
    });
    const logOutCommand = vscode.commands.registerCommand("cotr.logOut", async () => {
        await supabaseAuthProvider.logOut();
        vscode.window.showInformationMessage("Logged out");
    });
    context.subscriptions.push(loginCommand);
    context.subscriptions.push(logOutCommand);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map