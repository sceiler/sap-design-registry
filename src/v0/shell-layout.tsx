import { type ReactNode } from "react";

import { BrandHeader } from "@/components/brand-header";

import { cn } from "@/lib/utils";

import "@/app/globals.css";
import "@/app/tokens.css";

export default function ShellLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("font-sans bg-background text-foreground")}
    >
      <body>
        <BrandHeader />
        <main className="mt-16 flex w-full justify-center">
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
