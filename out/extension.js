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
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const WORD_TO_INSERT = 'use client';
function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.insertUseClient', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const config = vscode.workspace.getConfiguration('useClientInsertion');
            const insertText = config.get(WORD_TO_INSERT, '"use client";');
            const insertOnFirstLine = config.get('insertOnFirstLine', true);
            editor.edit(editBuilder => {
                if (insertOnFirstLine) {
                    // Insert text at the top if it's not already there
                    if (!document.lineAt(0).text.includes(insertText)) {
                        editBuilder.insert(new vscode.Position(0, 0), insertText + '\n\n');
                    }
                }
                else {
                    // Insert text at the current cursor position
                    const position = editor.selection.active;
                    editBuilder.insert(position, insertText + '\n');
                }
            });
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map