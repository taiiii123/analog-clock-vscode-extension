import vscode, { l10n } from 'vscode';
import { generateWebviewHtml } from './webview-content'; // 新しいファイルからインポート

export function activate(context: vscode.ExtensionContext) {

	const provider = new AnalogClockViewProvider(context.extensionUri);

	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(AnalogClockViewProvider.viewType, provider));


	context.subscriptions.push(
		vscode.workspace.onDidChangeConfiguration(async (e) => {
			if (e.affectsConfiguration('analogClock.size')
				|| e.affectsConfiguration('analogClock.enableEmboss')
				|| e.affectsConfiguration('analogClock.showDate')
				|| e.affectsConfiguration('analogClock.showTime')
				|| e.affectsConfiguration('analogClock.backgroundColor')
		) {

				const answer = await vscode.window.showInformationMessage(
					l10n.t("Analog Clock: Settings have been changed. A window reload is required to apply the changes. Do you want to reload now?"),
					// 'Settings have been changed. A window reload is required to apply the changes. Do you want to reload now?',
					// '設定が変更されました。変更を適用するにはウィンドウを再読み込みする必要があります。今すぐリロードしますか？',
					l10n.t("Yes"),
					l10n.t("No")
				);

				if (answer === l10n.t("Yes")) {
					vscode.commands.executeCommand('workbench.action.reloadWindow');
				}
			}
		})
	);
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
		};

		webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

	}

	private _getHtmlForWebview(webview: vscode.Webview) {
		const config = vscode.workspace.getConfiguration('analogClock');
		const clockSize = config.get('size', 'Small');
		return generateWebviewHtml(clockSize);
	}
}
