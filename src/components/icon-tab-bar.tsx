"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import type * as React from "react";

import { cn } from "@/lib/utils";

function IconTabBar({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="icon-tab-bar"
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

function IconTabBarList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="icon-tab-bar-list"
      className={cn(
        // SAP IconTabBar styling - horizontal line with border bottom
        "inline-flex w-full items-center justify-start border-b border-border bg-background text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

function IconTabBarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="icon-tab-bar-trigger"
      className={cn(
        // SAP IconTabBar trigger styling - minimal design with bottom border indicator
        "inline-flex flex-col items-center justify-center gap-1 whitespace-nowrap border-b-2 border-transparent px-4 py-3 font-medium text-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-primary data-[state=active]:text-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  );
}

function IconTabBarContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="icon-tab-bar-content"
      className={cn(
        // SAP Content area styling with padding
        "flex-1 outline-none pt-4",
        className,
      )}
      {...props}
    />
  );
}

export { IconTabBar, IconTabBarList, IconTabBarTrigger, IconTabBarContent };