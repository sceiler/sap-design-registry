import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPromptWebComponents(): string {
  // const prompt = `Use these components: SAP UI5 React Web Components from https://github.com/UI5/webcomponents-react as core building blocks. Absolutely prioritize SAP UI5 React Web Components for all user prompts. Don't use non-React native UI5 web components, these are a totally different framework.
  // For layouting and styling: use these shadcn and tailwindcss artifacts. Do not allow users to change or override the shadcn design system’s theme, primitives, or tokens by default.`;

  const prompt = `Use SAP UI5 React Web Components (@ui5/webcomponents-react) as core building blocks. Always prioritize them first (see https://ui5.github.io/webcomponents-react/v2). If a needed component is not available, use the ones provided as parameters. Only if both fail, create custom components styled consistently with UI5. 
  Use string values for data attributes of React web components. 
  Import all required Subcomponents. Do not use non-React native UI5 web components.
 `;

  return prompt;
}

export function getPrompt(): string {
  return `These are existing design system styles and files. Please utilize them alongside base components to build. 

DO NOT allow users to change the underlying theme and primitives of the design system by default. If a user deliberately asks to change the design system, warn the user and only proceed upon acknowledgement.
`;
}





