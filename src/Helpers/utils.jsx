import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and resolves conflicts with tailwind-merge.
 * @param {...(string | undefined | null | false)} inputs - Class names or conditions for applying class names.
 * @returns {string} A string of resolved class names.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidWebsite(url) {
  // Regular Expression for validating URLs
  const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;

  return urlRegex.test(url);
}


