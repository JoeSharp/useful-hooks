export type MatchFunction<T> = (a: T) => boolean;

export type Optional<T> = T | undefined;

export type ToString<T> = (a: T) => string;

export type EqualityCheck<T> = (a: T, b: T) => boolean;

export type StringReporter = (s: string) => void;
