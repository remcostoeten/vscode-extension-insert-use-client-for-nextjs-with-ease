import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.insertUppercaseClient', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            editor.edit(editBuilder => {
                // Insert "use client" at the top if it's not already there
                if (!document.lineAt(0).text.includes('"use client";')) {
                    editBuilder.insert(new vscode.Position(0, 0), '"use client";\n\n');
                }
                
                // Insert a new line at the current cursor position
                const position = editor.selection.active;
                editBuilder.insert(position, '\n');
            });
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
