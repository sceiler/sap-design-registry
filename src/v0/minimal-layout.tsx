import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

import "@/app/globals.css";
import "@/app/tokens.css";

export default function RootLayout({
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
        <main className="mt-16 flex w-full justify-center">
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
