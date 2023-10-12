export type EnumAsUnion<T extends Record<string, string>> = T[keyof T];
