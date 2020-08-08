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
