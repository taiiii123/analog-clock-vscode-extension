"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gethtml = void 0;
const gethtml = () => {
    return `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>モダンアナログ時計</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        };

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(45deg, #2c3e50, #3498db);
            font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
        }

        .clock-wrapper {
            position: relative;
            width: 400px;
            height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            box-shadow:
                0 25px 45px rgba(0, 0, 0, 0.2),
                inset 0 0 30px rgba(255, 255, 255, 0.1);
            padding: 30px;
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
                inset 0 0 60px rgba(0, 0, 0, 0.1),
                0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .clock::before {
            content: '';
            position: absolute;
            width: 94%;
            height: 94%;
            border-radius: 50%;
            border: 8px solid #2c3e50;
            box-shadow:
                inset 0 0 20px rgba(0, 0, 0, 0.2),
                0 0 50px rgba(255, 255, 255, 0.1);
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
            width: 2px;
            height: 15px;
            background: rgba(255, 255, 255, 0.7);
            transform-origin: bottom center;
        }

        .hour-mark.major {
            height: 20px;
            width: 4px;
            background: rgba(255, 255, 255, 0.9);
        }

        .hour-numbers {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }

        .hour-number {
            position: absolute;
            font-size: 18px;
            color: rgba(255, 255, 255, 0.9);
            text-align: center;
            font-weight: 500;
            width: 40px;
            height: 40px;
            line-height: 40px;
            transform: translate(-50%, -50%);
        }

        .center-point {
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #e74c3c;
            z-index: 999;
            box-shadow: 0 0 10px rgba(231, 76, 60, 0.8);
        }

        .center-point::after {
            content: '';
            position: absolute;
            width: 10px;
            height: 10px;
            top: 5px;
            left: 5px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.8);
        }

        .hand {
            position: absolute;
            transform-origin: bottom center;
            bottom: 50%;
            border-radius: 20px;
            z-index: 10;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        .hour-hand {
            width: 8px;
            height: 80px;
            background: #fff;
            z-index: 11;
        }

        .minute-hand {
            width: 6px;
            height: 140px;
            background: #fff;
            z-index: 12;
        }

        .second-hand {
            width: 2px;
            height: 150px;
            background: #e74c3c;
            z-index: 13;
        }

        .second-hand::before {
            content: '';
            position: absolute;
            bottom: -15px;
            left: -4px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #e74c3c;
        }

        .date-display {
            position: absolute;
            width: 120px;
            height: 30px;
            background: rgba(0, 0, 0, 0.1);
            /* background: rgba(255, 255, 255, 0.1); */
            backdrop-filter: blur(5px);
            /* border: 1px solid rgba(255, 255, 255, 0.2); */
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 14px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            /* 位置を変更 */
            bottom: 200px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1000;
        }

        .digital-time {
            position: absolute;
            bottom: 90px;
            color: white;
            font-size: 16px;
            background: rgba(0, 0, 0, 0.2);
            padding: 5px 15px;
            border-radius: 20px;
            letter-spacing: 1px;
            backdrop-filter: blur(5px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            z-index: 1000;
        }

        .brand {
            position: absolute;
            top: 90px;
            color: rgba(255, 255, 255, 0.7);
            font-size: 18px;
            font-weight: 300;
            letter-spacing: 3px;
            text-transform: uppercase;
        }

    </style>
</head>
<body>
    <div class="clock-wrapper">
        <div class="clock">
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
        // 時計の円の中心を取得（親要素の中心）
        const clock = document.querySelector('.clock');
        const clockRadius = clock.offsetWidth / 2;

        // 時間マーカーを作成
        const hourMarks = document.getElementById('hour-marks');

        // 60本のマーカーを追加（分マーカー）
        for (let i = 0; i < 60; i++) {
            const angle = i * 6; // 6度ずつ (360度 ÷ 60)
            const radian = (angle - 90) * (Math.PI / 180); // 12時の位置から開始するため-90度

            const mark = document.createElement('div');
            mark.className = 'hour-mark';

            // 5分ごと（時間ごと）のマーカーは大きく
            if (i % 5 === 0) {
                mark.classList.add('major');
            }

            // マーカーの半径方向の位置を設定（時計の縁から少し内側）
            const markLength = mark.classList.contains('major') ? 20 : 15;
            const markDistance = clockRadius - markLength - 10; // 10はマージン

            // マーカーの位置を計算
            const x = clockRadius + markDistance * Math.cos(radian);
            const y = clockRadius + markDistance * Math.sin(radian);

            // CSSで位置とスタイルを設定
            mark.style.left = x + "px;
            mark.style.top = y + "px";
            mark.style.height = markLength + "px";
            mark.style.transform = "translate(-50%, -100%) rotate(" + angle + "deg)";

            hourMarks.appendChild(mark);
        }

        // 数字を配置
        const hourNumbers = document.getElementById('hour-numbers');

        for (let i = 1; i <= 12; i++) {
            const angle = (i * 30 - 90) * (Math.PI / 180); // 30度ずつ (360度 ÷ 12)
            const numberDistance = clockRadius - 45; // 数字の半径方向の位置

            const x = clockRadius + numberDistance * Math.cos(angle);
            const y = clockRadius + numberDistance * Math.sin(angle);

            const number = document.createElement('div');
            number.className = 'hour-number';
            number.textContent = i;
            number.style.left = x + "px";
            number.style.top = y + "px";

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
            const day = now.getDate().toString().padStart(2, '0');
            const month = (now.getMonth() + 1).toString().padStart(2, '0');
            const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const dayOfWeek = daysOfWeek[now.getDay()];
            dateDisplay.textContent = year + "/" + day + "/" + month + " " + dayOfWeek};

      // デジタル時間表示
            const digitalTime = document.getElementById('digital-time');
            const hoursDisplay = now.getHours().toString().padStart(2, '0');
            const minutesDisplay = minutes.toString().padStart(2, '0');
            const secondsDisplay = seconds.toString().padStart(2, '0');
            digitalTime.textContent = hoursDisplay + ":" + minutesDisplay + ":" +secondsDisplay;

            // 針の角度計算
            const hourDegrees = (hours * 30) + (minutes * 0.5);
            const minuteDegrees = (minutes * 6);
            const secondDegrees = (seconds * 6) + (milliseconds * 0.006);

            // 針の回転
            document.getElementById('hour-hand').style.transform = "rotate(" + hourDegrees + "deg)";
            document.getElementById('minute-hand').style.transform = "rotate(" + minuteDegrees + "deg)";
            document.getElementById('second-hand').style.transform = "rotate(" + secondDegrees + "deg)";
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
</html>
`;
};
exports.gethtml = gethtml;
//# sourceMappingURL=html.js.map