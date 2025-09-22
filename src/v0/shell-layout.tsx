import { type ReactNode } from "react";

import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

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
        <div className="flex h-screen flex-col">
          <BrandHeader />
          <SidebarProvider>
            <BrandSidebar />
            <main className="flex-1 overflow-auto bg-background">
              <div className="container mx-auto px-4 py-6">{children}</div>
            </main>
          </SidebarProvider>
        </div>
      </body>
    </html>
  );
}
