import type * as vscode from 'vscode';
import type Configuration from './Configuration';

export class Style implements vscode.QuickPickItem {
  label: Configuration['style'];
  detail: string;

  constructor({ value, description }: { value: Configuration['style']; description: string }) {
    this.label = value;
    this.detail = description;
  }
}

export class Platform implements vscode.QuickPickItem {
  label: Configuration['platform'];
  detail: string;

  constructor({ value, description }: { value: Configuration['platform']; description: string }) {
    this.label = value;
    this.detail = description;
  }
}

export class Script implements vscode.QuickPickItem {
  label: Configuration['script'];
  detail: string;

  constructor({ value, description }: { value: Configuration['script']; description: string }) {
    this.label = value;
    this.detail = description;
  }
}
