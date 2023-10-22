import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isImageFile(fileType: string) {
  return fileType.startsWith("image/");
}

export class ObjectUtils {
  static omit(object: Record<string, any>, keys: string[]) {
    return Object.fromEntries(
      Object.entries(object).filter(([key]) => !keys.includes(key)),
    );
  }
}
