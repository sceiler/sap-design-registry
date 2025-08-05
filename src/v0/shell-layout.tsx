import { Poppins } from "next/font/google";
import React, { type ReactNode } from "react";

import { BrandHeader } from "@/components/brand-header";

import { cn } from "@/lib/utils";

import "@/app/tokens.css";
import "@/app/globals.css";

const PoppinsSans = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export default function ShellLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(PoppinsSans.variable, "bg-background text-foreground")}
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
