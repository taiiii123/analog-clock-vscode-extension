import { getSmallClockHtml } from './smallClockHtml';
import { getLargeClockHtml } from './largeClockHtml';


export function generateWebviewHtml(clockSize: string): string {
  if (clockSize === "small") {
    return getSmallClockHtml();
  } else {
    return getLargeClockHtml();
  }
}
