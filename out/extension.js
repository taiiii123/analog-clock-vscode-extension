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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
const vscode_1 = __importStar(require("vscode"));
const webviewContent_1 = require("./webviewContent"); // 新しいファイルからインポート
function activate(context) {
    const provider = new AnalogClockViewProvider(context.extensionUri);
    context.subscriptions.push(vscode_1.default.window.registerWebviewViewProvider(AnalogClockViewProvider.viewType, provider));
    context.subscriptions.push(vscode_1.default.workspace.onDidChangeConfiguration(async (e) => {
        if (e.affectsConfiguration('analogClock.size')
            || e.affectsConfiguration('analogClock.enableEmboss')
            || e.affectsConfiguration('analogClock.showDate')
            || e.affectsConfiguration('analogClock.showTime')
            || e.affectsConfiguration('analogClock.backgroundColor')) {
            const answer = await vscode_1.default.window.showInformationMessage(vscode_1.l10n.t("Analog Clock: Settings have been changed. A window reload is required to apply the changes. Do you want to reload now?"), 
            // 'Settings have been changed. A window reload is required to apply the changes. Do you want to reload now?',
            // '設定が変更されました。変更を適用するにはウィンドウを再読み込みする必要があります。今すぐリロードしますか？',
            vscode_1.l10n.t("Yes"), vscode_1.l10n.t("No"));
            if (answer === vscode_1.l10n.t("Yes")) {
                vscode_1.default.commands.executeCommand('workbench.action.reloadWindow');
            }
        }
    }));
}
class AnalogClockViewProvider {
    _extensionUri;
    static viewType = 'analogClock.analogClockView';
    constructor(_extensionUri) {
        this._extensionUri = _extensionUri;
    }
    resolveWebviewView(webviewView, _context, _token) {
        webviewView.webview.options = {
            enableScripts: true,
        };
        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
    }
    _getHtmlForWebview(webview) {
        const config = vscode_1.default.workspace.getConfiguration('analogClock');
        const clockSize = config.get('size', 'Small');
        return (0, webviewContent_1.generateWebviewHtml)(clockSize);
    }
}
//# sourceMappingURL=extension.js.map