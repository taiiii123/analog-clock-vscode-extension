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
exports.getSmallClockHtml = getSmallClockHtml;
const vscode_1 = __importStar(require("vscode"));
/* ---------------------------------- small clock html ------------------------------------------------- */
function getSmallClockHtml() {
    const config = vscode_1.default.workspace.getConfiguration("analogClock");
    const enableEmboss = config.get("enableEmboss", true);
    console.log("getSmallClockHtml()");
    return `<!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>アナログ時計</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                background: linear-gradient(45deg, #2c3e50, #3498db);
                font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
            }

            @media (min-width: 301px) {
                .hidden-text {
                    visibility: hidden;
                }

                .clock-wrapper {
                    position: relative;
                    width: 250px;
                    height: 250px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 15px;
                    backdrop-filter: blur(10px);
                    padding: 20px;
                }

                .embossed {
                    background: rgba(255, 255, 255, 0.05);
                    box-shadow:
                        0 15px 30px rgba(0, 0, 0, 0.2),
                        inset 0 0 20px rgba(255, 255, 255, 0.1);
                }

                .clock {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    background: rgba(0, 0, 0, 0.03);
                    border: 2px solid rgba(255, 255, 255, 0.1);
                    box-shadow:
                        inset 0 0 40px rgba(0, 0, 0, 0.1),
                        0 6px 12px rgba(0, 0, 0, 0.1);
                }

                .clock::before {
                    content: '';
                    position: absolute;
                    width: 94%;
                    height: 94%;
                    border-radius: 50%;
                    border: 5px solid #2c3e50;
                    box-shadow:
                        inset 0 0 15px rgba(0, 0, 0, 0.2),
                        0 0 30px rgba(255, 255, 255, 0.1);
                }

                .hour-marks {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                }

                .hour-mark {
                    position: absolute;
                    width: 1px;
                    height: 6px;
                    background: rgba(255, 255, 255, 0.5);
                    transform-origin: bottom center;
                }

                .hour-mark.major {
                    height: 12px;
                    width: 2px;
                    background: rgba(255, 255, 255, 0.9);
                }

                .hour-mark.medium {
                    height: 9px;
                    width: 1.5px;
                    background: rgba(255, 255, 255, 0.7);
                }

                .hour-numbers {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }

                .hour-number {
                    position: absolute;
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.9);
                    text-align: center;
                    font-weight: 500;
                    width: 25px;
                    height: 25px;
                    line-height: 25px;
                    transform: translate(-50%, -50%);
                }

                .center-point {
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: #e74c3c;
                    z-index: 999;
                    box-shadow: 0 0 6px rgba(231, 76, 60, 0.8);
                }

                .center-point::after {
                    content: '';
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    top: 3px;
                    left: 3px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.8);
                }

                .hand {
                    position: absolute;
                    transform-origin: bottom center;
                    bottom: 50%;
                    border-radius: 10px;
                    z-index: 10;
                    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
                }

                .hour-hand {
                    width: 5px;
                    height: 50px;
                    background: #fff;
                    z-index: 11;
                }

                .minute-hand {
                    width: 3px;
                    height: 80px;
                    background: #fff;
                    z-index: 12;
                }

                .second-hand {
                    width: 1px;
                    height: 90px;
                    background: #e74c3c;
                    z-index: 13;
                }

                .second-hand::before {
                    content: '';
                    position: absolute;
                    bottom: -9px;
                    left: -3px;
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background: #e74c3c;
                }

                .date-display {
                    position: absolute;
                    width: 100px;
                    height: 22px;
                    background: rgba(0, 0, 0, 0.2);
                    backdrop-filter: blur(5px);
                    border-radius: 4px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    font-size: 13px;
                    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.2);
                    bottom: 125px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 1000;
                }

                .digital-time {
                    position: absolute;
                    bottom: 60px;
                    color: white;
                    font-size: 13px;
                    background: rgba(0, 0, 0, 0.2);
                    padding: 3px 10px; */
                    border-radius: 12px;
                    letter-spacing: 1px;
                    backdrop-filter: blur(5px);
                    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.2);
                    z-index: 1000;
                    font-weight: bold;
                }

                .brand {
                    position: absolute;
                    top: 60px;
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 12px;
                    font-weight: 300;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                }
            }

            @media (max-width: 300px) {
                #hour-numbers, #date-display, #digital-time {
                    display: none;
                }

                .hidden-text {
                    visibility: visible;
                    background: rgba(0, 0, 0, 0.3);
                    backdrop-filter: blur(5px);
                    padding: 3px 4px;
                    border-radius: 5px;
                    text-align: center;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                    margin-top: 100px;
                }
            }
        </style>
    </head>
    <body>
        <div class="clock-wrapper">
            <div class="clock">
                <p class="hidden-text">${vscode_1.l10n.t("📢 The clock is hidden due to the small screen size.")}</p>
                <div class="hour-marks" id="hour-marks"></div>
                <div class="hour-numbers" id="hour-numbers"></div>
                <div class="date-display" id="date-display"></div>
                <div class="digital-time" id="digital-time"></div>
                <div class="hand hour-hand" id="hour-hand"></div>
                <div class="hand minute-hand" id="minute-hand"></div>
                <div class="hand second-hand" id="second-hand"></div>
                <div class="center-point"></div>
            </div>
        </div>

        <script>
            // エンボス効果の有無
            const isEmbossed = ${enableEmboss};
            if (isEmbossed) {
                document.querySelector('.clock-wrapper').className += ' embossed';
            }

            // 時計の円の中心を取得（親要素の中心）
            const clock = document.querySelector('.clock');
            const clockRadius = clock.offsetWidth / 2;

            // 時間マーカーを作成
            const hourMarks = document.getElementById('hour-marks');

            // 60本のマーカーを追加（秒/分マーカー）
            for (let i = 0; i < 60; i++) {
                const angle = i * 6; // 6度ずつ (360度 ÷ 60)
                const radian = (angle - 90) * (Math.PI / 180); // 12時の位置から開始するため-90度

                const mark = document.createElement('div');
                mark.className = 'hour-mark';

                // マーカーの種類を決定
                // 時間ごと（5分ごと）のマーカーは最も大きく
                if (i % 5 === 0) {
                    mark.classList.add('major');
                }
                // 15秒ごとのマーカーは中くらい
                else if (i % 15 === 0) {
                    mark.classList.add('medium');
                }

                // マーカーの長さを取得
                let markLength = 6; // デフォルト
                if (mark.classList.contains('major')) {
                    markLength = 12;
                } else if (mark.classList.contains('medium')) {
                    markLength = 9;
                }

                // マーカーの半径方向の位置を設定（時計の縁から少し内側）
                const markDistance = clockRadius - markLength - 6; // 6はマージン

                // マーカーの位置を計算
                const x = clockRadius + markDistance * Math.cos(radian);
                const y = clockRadius + markDistance * Math.sin(radian);

                // CSSで位置とスタイルを設定
                mark.style.left = \`\${x}px\`;
                mark.style.top = \`\${y}px\`;
                mark.style.height = \`\${markLength}px\`;
                mark.style.transform = \`translate(-50%, -100%) rotate(\${angle}deg)\`;

                hourMarks.appendChild(mark);
            }

            // 数字を配置
            const hourNumbers = document.getElementById('hour-numbers');

            for (let i = 1; i <= 12; i++) {
                const angle = (i * 30 - 90) * (Math.PI / 180); // 30度ずつ (360度 ÷ 12)
                const numberDistance = clockRadius - 30; // 数字の半径方向の位置

                const x = clockRadius + numberDistance * Math.cos(angle);
                const y = clockRadius + numberDistance * Math.sin(angle);

                const number = document.createElement('div');
                number.className = 'hour-number';
                number.textContent = i;
                number.style.left = \`\${x}px\`;
                number.style.top = \`\${y}px\`;

                hourNumbers.appendChild(number);
            }

            // 時計の更新関数
            function updateClock() {
                const now = new Date();
                const hours = now.getHours() % 12;
                const minutes = now.getMinutes();
                const seconds = now.getSeconds();
                const milliseconds = now.getMilliseconds();

                // 日付表示
                const dateDisplay = document.getElementById('date-display');
                const year = now.getFullYear();
                const month = (now.getMonth() + 1).toString().padStart(2, '0');
                const day = now.getDate().toString().padStart(2, '0');
                const daysOfWeek = ${vscode_1.l10n.t("['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']")};
                const dayOfWeek = daysOfWeek[now.getDay()];
                dateDisplay.textContent = \`\${year}/\${month}/\${day} (\${dayOfWeek}\)\`;

                // デジタル時間表示
                const digitalTime = document.getElementById('digital-time');
                const hoursDisplay = now.getHours().toString().padStart(2, '0');
                const minutesDisplay = minutes.toString().padStart(2, '0');
                const secondsDisplay = seconds.toString().padStart(2, '0');
                digitalTime.textContent = \`\${hoursDisplay}:\${minutesDisplay}:\${secondsDisplay}\`;

                // 針の角度計算
                const hourDegrees = (hours * 30) + (minutes * 0.5);
                const minuteDegrees = (minutes * 6);
                const secondDegrees = (seconds * 6) + (milliseconds * 0.006);

                // 針の回転
                document.getElementById('hour-hand').style.transform = \`rotate(\${hourDegrees}deg)\`;
                document.getElementById('minute-hand').style.transform = \`rotate(\${minuteDegrees}deg)\`;
                document.getElementById('second-hand').style.transform = \`rotate(\${secondDegrees}deg)\`;
            }

            // 最初に時計を更新
            updateClock();

            // 秒針は滑らかに動かすため高頻度で更新
            setInterval(updateClock, 50);

            // 分針と時針は1分ごとに更新
            setInterval(() => {
                const now = new Date();
                const minutes = now.getMinutes();
                const seconds = now.getSeconds();
                if (seconds === 0) {
                    updateClock();
                }
            }, 1000);

        </script>
    </body>
    </html>`;
}
//# sourceMappingURL=smallClockHtml.js.map