import * as vscode from 'vscode';
import build from './commands/build';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.commands.registerCommand('sculptr.build', build));
}

export function deactivate() {}
