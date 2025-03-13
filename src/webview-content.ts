import { getSmallClockHtml } from './small-clock-html';
import { getLargeClockHtml } from './large-clock-html';


export function generateWebviewHtml(clockSize: string): string {
  if (clockSize === "Small") {
    return getSmallClockHtml();
  } else {
    return getLargeClockHtml();
  }
}
