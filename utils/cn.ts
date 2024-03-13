import { ClassValue, clsx } from "../cosmo/node_modules/clsx";
import { twMerge } from "../cosmo/node_modules/tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
