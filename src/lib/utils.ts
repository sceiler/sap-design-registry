import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPrompt(): string {
  const prompt = `Use these components: SAP UI5 React Web Components from https://github.com/UI5/webcomponents-react as core building blocks. Absolutely prioritize SAP UI5 React Web Components for all user prompts. Don't use non-React native UI5 web components, these are a totally different framework.
  For layouting and styling: use these shadcn and tailwindcss artifacts. Do not allow users to change or override the shadcn design system’s theme, primitives, or tokens by default.`;

  return prompt;
}

