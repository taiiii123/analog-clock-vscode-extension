import * as vscode from 'vscode';
import { generateWebviewHtml } from './webviewContent'; // 新しいファイルからインポート

export function activate(context: vscode.ExtensionContext) {

	const provider = new AnalogClockViewProvider(context.extensionUri);

	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(AnalogClockViewProvider.viewType, provider));

}

class AnalogClockViewProvider implements vscode.WebviewViewProvider {

	public static readonly viewType = 'analogClock.analogClockView';

	constructor(
		private readonly _extensionUri: vscode.Uri,
	) { }

	public resolveWebviewView(
		webviewView: vscode.WebviewView,
		_context: vscode.WebviewViewResolveContext,
		_token: vscode.CancellationToken,
	) {

		webviewView.webview.options = {
			enableScripts: true,

			// localResourceRoots: [
			// 	this._extensionUri
			// ]
		};

		webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

	}

	private _getHtmlForWebview(webview: vscode.Webview) {
		// const clockSize = 'small';
		const clockSize = 'large';
		return generateWebviewHtml(clockSize);
	}
}
