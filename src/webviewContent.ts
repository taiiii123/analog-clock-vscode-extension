import { getSmallClockHtml } from './smallClockHtml';
import { getLargeClockHtml } from './largeClockHtml';


export function generateWebviewHtml(clockSize: string): string {
  if (clockSize === "Small") {
    return getSmallClockHtml();
  } else {
    return getLargeClockHtml();
  }
}
