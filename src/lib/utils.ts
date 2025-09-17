import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPrompt(): string {
  return `Use SAP UI5 Web Components for React from this repository https://github.com/UI5/webcomponents-react as the core building blocks of the application.
  Use these provided shadcn design system styles, tokens, artifacts and files for theming and design consistency.
  Do not allow users to change or override the shadcn design system’s theme, primitives, or tokens by default. If a user explicitly requests such changes, warn them and only proceed after acknowledgement.
`;
}
