<div align="right" style="font-size: 20px;">

**English** | [日本語](./README.ja.md)

</div>

<p align="center"><img src="https://github.com/user-attachments/assets/7c10d957-4d10-42f2-9f6f-c9c6e53bc146" height=120 style="filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));"/></p>
<p align="center"><img src="https://github.com/user-attachments/assets/ee27a83e-643a-4d34-86f3-4edbdf0ca96c" height=120 style="filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));"/></p>

# Analog Clock - VS Code Extension ⌚

**Analog Clock** adds a tab with an analog clock to the explorer view, displaying the current time.

### Demo

<p align="center"><img src="https://github.com/user-attachments/assets/e2af6f72-d1a0-4ccf-b08a-30030e22b630" style="filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));"/></p>

## Installation 💻

1. Open Visual Studio Code.
2. Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (macOS).
3. Type `ext install analog-clock`.
4. Press Enter.

## Features ✨

A simple and easy-to-use analog clock with the following features:

- **Size Setting**: Choose between small and large sizes.
- **Emboss Effect**: Add a 3D effect to the clock.
- **Date Display**: Toggle the display of the date (year, month, day, and day of the week).
- **Time Display**: Toggle the display of digital time.
- **Background Color**: Set your preferred color in HEX format.

## Usage 💡

1. After installation, click the "Explorer" icon in the VSCode sidebar.
2. The "Analog Clock" tab will appear at the bottom of the explorer view.
3. Click the tab to display the analog clock.

### Customize Settings

You can customize the settings via the following methods or through [settings.json](#settingsjson):

1. Open `File > Preferences > Settings` from the VSCode menu.
2. Type "Analog Clock" in the search bar.
3. The following settings will be displayed:
   - ⚙️ Size: Choose between small or large.
   - 💫 Emboss Effect: Enable/disable the emboss effect.
   - 📅 Date Display: Show/hide the date.
   - 🕒 Time Display: Show/hide the digital time.
   - 🎨 Background Color: Specify the color in HEX format.

*Note: After changing settings, you need to reload VSCode to apply the changes.*

<img src="https://github.com/user-attachments/assets/8853cb89-7aad-4873-ac41-b9a8da4bd33f" style="filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));"/>

## Settings ⚙️

### settings.json
You can change the extension [settings](https://code.visualstudio.com/docs/customization/userandworkspace) in the `settings.json` file:

- `analogClock.size`: Change the clock size. Options are `Large` or `Small`.
- `analogClock.enableEmboss`: Enable or disable the emboss effect.
- `analogClock.showDate`: Enable or disable the date display.
- `analogClock.showTime`: Enable or disable the time display.
- `analogClock.backgroundColor`: Set the background color in HEX format.

Example
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

## Changelog 📝

All changes can be found in the [CHANGELOG](./CHANGELOG.md).

## License ⚖️

This project is licensed under the [MIT](./LICENSE) License.
