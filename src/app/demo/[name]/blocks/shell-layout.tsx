import React, { type ReactNode } from "react";

import { BrandHeader } from "@/components/brand-header";

export default function ShellLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <BrandHeader />
      <main className="flex w-full justify-center">
        <div className="container">{children}</div>
      </main>
    </>
  );
}
