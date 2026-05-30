/**
 * Tiny className joiner — filters falsy values and joins with a space.
 * Avoids pulling in clsx/tailwind-merge for a project this size.
 */
export type ClassValue = string | number | false | null | undefined;

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
