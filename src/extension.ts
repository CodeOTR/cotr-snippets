import * as vscode from "vscode";
import { getEditorSelection } from "./vscodeUtils";
import { SupabaseAuthenticationProvider } from "./authentication";

export function activate(context: vscode.ExtensionContext) {
  const command = "cotr.saveSnippet";

  const commandHandler = () => {
    const selection = getEditorSelection();
    console.log(selection);
    vscode.env.openExternal(
      vscode.Uri.parse(
        "https://cotr.dev/snippet/new?code=" +
          encodeURIComponent(selection ?? "")
      )
    );
  };

  context.subscriptions.push(
    vscode.commands.registerCommand(command, commandHandler)
  );

  const supabaseAuthProvider = new SupabaseAuthenticationProvider(context);

  const loginCommand = vscode.commands.registerCommand(
    "cotr.logIn",
    async () => {
      try {
        const session = await supabaseAuthProvider.createSession();
        vscode.window.showInformationMessage(
          `Logged in as ${session.account.label}`
        );
      } catch (error) {
        vscode.window.showErrorMessage(`Login failed: ${error}`);
      }
    }
  );

  const logOutCommand = vscode.commands.registerCommand(
    "cotr.logOut",
    async () => {
      await supabaseAuthProvider.logOut();
      vscode.window.showInformationMessage("Logged out");
    }
  );

  context.subscriptions.push(loginCommand);
  context.subscriptions.push(logOutCommand);
}
