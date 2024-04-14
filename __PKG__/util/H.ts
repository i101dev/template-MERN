//
//
import { UserAlert } from "./RES";
//
//
export const headerCls = "BG-D4 BB-1-D5 FS-2 C-L6 P-1";
export const iconSize = "2.5em";
//
//
export function sh(x: number): number {
    return parseFloat(x.toFixed(3));
}
export function toX(val: number, x: number): string {
    return fNum(val, 0, x);
}
export function last(arr: any[]) {
    return arr.slice(-1)[0];
}
//
//
export function fDate(timestamp: number) {
    const date = new Date(timestamp * 1000);
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "short",
        day: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
}
export function fNum(n: number, minD: number = 0, maxD: number = 0) {
    //
    const options = {
        minimumFractionDigits: minD,
        maximumFractionDigits: maxD,
    };
    //
    const formatter = new Intl.NumberFormat("en-US", options);
    //
    return formatter.format(n);
}
//
//
export function addUserAlert(userAlerts: UserAlert[], header: string, details: string[]) {
    return userAlerts.push({ header, details });
}
