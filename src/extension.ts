import * as vscode from 'vscode';

const WORD_TO_INSERT = 'use client';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.insertUseClient', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const config = vscode.workspace.getConfiguration('useClientInsertion');
            const insertText = config.get<string>(WORD_TO_INSERT, '"use client";');
            const insertOnFirstLine = config.get<boolean>('insertOnFirstLine', true);

            editor.edit(editBuilder => {
                if (insertOnFirstLine) {
                    // Insert text at the top if it's not already there
                    if (!document.lineAt(0).text.includes(insertText)) {
                        editBuilder.insert(new vscode.Position(0, 0), insertText + '\n\n');
                    }
                } else {
                    // Insert text at the current cursor position
                    const position = editor.selection.active;
                    editBuilder.insert(position, insertText + '\n');
                }
            });
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}