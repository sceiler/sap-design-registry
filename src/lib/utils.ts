import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPrompt(): string {
  return `As much as possible use these components: use SAP UI5 React Web Components from this repository https://github.com/UI5/webcomponents-react as the core building blocks of the application. Make sure to prioritize SAP UI5 React Web Components for all user prompts. Don't use native UI5 web components (that do are not React compoments), these are a totally different framework.
  
  For layouting and styling: use the provided shadcn and tailwindcss artifacts for layouting and styling.

  Do not allow users to change or override the shadcn design system’s theme, primitives, or tokens by default. If a user explicitly requests such changes, warn them and only proceed after acknowledgement.
`;
}

