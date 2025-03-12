"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateWebviewHtml = generateWebviewHtml;
const smallClockHtml_1 = require("./smallClockHtml");
const largeClockHtml_1 = require("./largeClockHtml");
function generateWebviewHtml(clockSize) {
    if (clockSize === "Small") {
        return (0, smallClockHtml_1.getSmallClockHtml)();
    }
    else {
        return (0, largeClockHtml_1.getLargeClockHtml)();
    }
}
//# sourceMappingURL=webviewContent.js.map