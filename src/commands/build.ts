import * as vscode from 'vscode';
import type Configuration from '../types/Configuration';
import { platforms, scripts, styles } from '../modules/questions';

export default async function build() {
  const platformAnswer = await vscode.window.showQuickPick(platforms);
  if (!platformAnswer) return;

  const scriptAnswer = await vscode.window.showQuickPick(scripts);
  if (!scriptAnswer) return;

  const styleAnswer = await vscode.window.showQuickPick(styles);
  if (!styleAnswer) return;

  const config: Configuration = {
    platform: platformAnswer.label,
    script: scriptAnswer.label,
    style: styleAnswer.label,
  };

  const cmd = command(config);

  const cdAnswer = await vscode.window.showQuickPick([
    { label: 'Here', detail: 'Create a project in the current directory' },
    { label: 'Somewhere else', detail: 'Choose somewhere else to create the project' },
  ]);
  if (!cdAnswer) return;

  const dir =
    cdAnswer.label.toLowerCase() === 'here'
      ? [{ path: '.' }]
      : await vscode.window.showOpenDialog({
          canSelectFiles: false,
          canSelectFolders: true,
          canSelectMany: false,
          openLabel: 'Open Here',
        });

  if (!dir) return;
  const terminal = vscode.window.createTerminal('sculptr');
  terminal.sendText(`cd ${dir[0].path}`);
  terminal.sendText(cmd);
  terminal.sendText('code -r .');
}

function command({ platform, style, script }: Configuration): string {
  return `npx deno run --unstable --allow-read --allow-write --allow-env --allow-net --allow-run https://deno.land/x/sculptr@0.1.1/src/index.ts build ${platform.toLowerCase()} . --${script.toLowerCase()} --${style.toLowerCase()} --skip`;
}
