import React, { type ReactNode } from "react";

import { BrandHeader } from "@/components/brand-header";

export default function ShellLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <BrandHeader />
      <main className="flex-1 overflow-auto bg-background">
        <div className="container mx-auto px-4 py-6">
          {children}
        </div>
      </main>
    </div>
  );
}
