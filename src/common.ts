import * as winston from "winston";
import { EqualityCheck, ToString } from "./types";

export const simpleLogger = winston.createLogger({
  level: "info",
  format: winston.format.simple(),
  transports: [new winston.transports.Console()],
});

export const defaultEqualityCheck: EqualityCheck<any> = (a, b) => a === b;
export const defaultToString: ToString<any> = (a) => `${a}`;

export function simpleSwap<T>(arr: T[], from: number, to: number) {
  const swapItem: T = arr[from];
  arr[from] = arr[to];
  arr[to] = swapItem;
}

export function objToString(o?: object) {
  return !!o
    ? Object.entries(o)
        .map((k) => `${k[0]}=${k[1]}`)
        .join(" ")
    : "none";
}

// tslint:disable-next-line: no-empty
export const emptyObserver = () => {};

export const anyComparator: Comparator<any> = (a: any, b: any) => a - b;

/**
 * Comparator function that uses simple arithmetic comparison.
 * based on https://www.w3schools.com/js/js_array_sort.asp
 * If the result is negative a is sorted before b.
 * If the result is positive b is sorted before a.
 * If the result is 0 no changes are done with the sort order of the two values.
 *
 * @param {number | string} a First item
 * @param {number | string} b Second item
 */
export const arithmeticComparator: Comparator<number> = (
  a: number,
  b: number
) => a - b;

export const stringComparator: Comparator<string> = (a: string, b: string) =>
  a.localeCompare(b);
