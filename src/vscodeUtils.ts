import * as vscode from "vscode";

export function getEditorSelection(): string | undefined {
  const editor = vscode.window.activeTextEditor;
  let startCursorPosition = editor?.selection.start;
  let endCursorPosition = editor?.selection.end;
  const selection = editor?.document.getText(
    new vscode.Range(startCursorPosition!, endCursorPosition!)
  );
  //let highlight = editor?.document.getText(selection);

  return selection;
}
