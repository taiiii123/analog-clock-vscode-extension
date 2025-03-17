"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateWebviewHtml = generateWebviewHtml;
const small_clock_html_1 = require("./small-clock-html");
const large_clock_html_1 = require("./large-clock-html");
function generateWebviewHtml(clockSize) {
    if (clockSize === "Small") {
        return (0, small_clock_html_1.getSmallClockHtml)();
    }
    else {
        return (0, large_clock_html_1.getLargeClockHtml)();
    }
}
//# sourceMappingURL=webview-content.js.map