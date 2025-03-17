<div align="right" style="font-size: 20px;">

[English](./README.md) | **日本語**

</div>

<p align="center"><img src="https://github.com/user-attachments/assets/7c10d957-4d10-42f2-9f6f-c9c6e53bc146" height=120 style="filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));"/></p>
<p align="center"><img src="https://github.com/user-attachments/assets/ee27a83e-643a-4d34-86f3-4edbdf0ca96c" height=120 style="filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));"/></p>

# Analog Clock - VS Code拡張機能 ⌚

**Analog Clock**は、エクスプローラービューにアナログ時計のタブを追加し、現在の時刻を表示する拡張機能です。

### 動作例

<p align="center"><img src="https://github.com/user-attachments/assets/46f7ab4e-aa5f-4168-8f09-0bf600689006" style="filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));"/></p>

## インストール 💻

1. Visual Studio Codeを開く
2. `Ctrl+P`（Windows/Linux）または`Cmd+P`（macOS）を押す
3. `ext install analog-clock`と入力
4. Enterを押す

## 機能 ✨

次の機能を備えた、シンプルで使いやすいアナログ時計です：

- **サイズ設定**: 小サイズ・大サイズから選択可能
- **エンボス効果**: 時計の見た目を立体的に表現
- **日付表示**: 年月日と曜日の表示切替
- **時刻表示**: デジタル時刻の表示切替
- **背景色**: お好みの色をHEX形式で設定可能

## 使用方法 💡

1. インストール後、VSCodeのサイドバーにある「エクスプローラー」アイコンをクリックします。
2. エクスプローラービューの下部に「アナログ時計」タブが表示されます。
3. タブをクリックすると、アナログ時計が表示されます。

### 設定のカスタマイズ

設定のカスタマイズは以下の方法または[settings.json](#settingsjson)から変更できます。

1. VSCodeメニューから`ファイル > ユーザー設定 > 設定`を開きます。
2. 検索バーに「Analog Clock」と入力します。
3. 以下の設定項目が表示されます：
   - ⚙️ サイズ：小または大から選択できます
   - 💫 エンボス効果：時計のエンボス効果を有効/無効
   - 📅 日付表示：日付の表示/非表示
   - 🕒 時刻表示：デジタル時刻の表示/非表示
   - 🎨 背景色：HEX形式で色を指定

※設定を変更した場合、変更を適用するにはVSCodeの再読み込みが必要です。

<img src="https://github.com/user-attachments/assets/4b46c0bd-2ebb-4ba7-a4b0-0e66fa1ed1e5" style="filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));"/>

## 設定 ⚙️

### settings.json
`settings.json`ファイルで拡張機能の[設定](https://code.visualstudio.com/docs/customization/userandworkspace)を変更できます：

- `analogClock.size`: 時計のサイズを変更します。選択肢は`Large`または`Small`。
- `analogClock.enableEmboss`: エンボス効果を有効にするかどうか。
- `analogClock.showDate`: 日付表示を有効にするかどうか。
- `analogClock.showTime`: 時刻表示を有効にするかどうか。
- `analogClock.backgroundColor`: 背景色をHEX形式で設定します。

設定例
```json
// settings.json
{
  "analogClock.backgroundColor": "#ff5733cc",
  "analogClock.enableEmboss": true,
  "analogClock.showDate": true,
  "analogClock.showTime": true,
  "analogClock.size": "Large"
}
```

## 変更履歴 📝

すべての変更内容は[CHANGELOG](./CHANGELOG.md)で確認できます。

## ライセンス ⚖️

このプロジェクトは[MIT](./LICENSE)ライセンスの下でライセンスされています。
