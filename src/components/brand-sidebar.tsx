"use client";

import {
  AlertTriangle,
  BarChart2,
  Clock,
  Database,
  Home,
  LayoutGrid,
  MessageSquareText,
  MoreHorizontal,
  Plus,
  Table,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type * as React from "react";
import { Icon } from '@ui5/webcomponents-react/Icon';
import "@ui5/webcomponents-icons/dist/AllIcons-fetch.js";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  badge?: {
    text: string;
  };
}

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function BrandSidebar({
  collapsed = false,
  onToggle,
  className,
}: SidebarProps) {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const mainNavItems: NavItem[] = [
    {
      title: "Home",
      href: "#",
      icon: <Icon name="home" />,
    },
    {
      title: "Projects",
      href: "#projects",
      icon: <Icon name="folder-blank" />,
    },
    {
      title: "Databases",
      href: "#databases",
      icon: <Icon name="database" />,
    },
    {
      title: "Tables",
      href: "#tables",
      icon: <Icon name="table-view" />,
      // badge: {
      //   text: "Beta",
      // },
    },
    {
      title: "AI",
      href: "#ai",
      icon: <Icon name="ai" />,
      // badge: {
      //   text: "Alpha",
      // },
    },
  ];

  const toolsNavItems: NavItem[] = [
    {
      title: "Alerts",
      href: "#alerts",
      icon: <Icon name="alert" />,
    },
    {
      title: "Analytics",
      href: "#analytics",
      icon: <Icon name="bar-chart" />,
    },
    {
      title: "History",
      href: "#history",
      icon: <Icon name="history" />,
    },
    // {
    //   title: "More",
    //   href: "#more",
    //   icon: <MoreHorizontal className="size-4" />,
    // },
  ];

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="mt-16">
      <SidebarHeader>
        <div className={cn(isCollapsed ? "py-2" : "p-2")}>
          <Button className={cn(isCollapsed ? "h-8 w-8 p-0" : "w-full")}>
            <Plus className={cn("size-4", !isCollapsed && "mr-1")} />
            {!isCollapsed && <span>Create</span>}
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Main Nav Items */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      pathname === item.href ||
                      (pathname === "" && item.href === "/")
                    }
                    tooltip={item.title}
                  >
                    <Link href={item.href}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge>{item.badge.text}</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Tools Nav Items */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {toolsNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={item.title}
                  >
                    <Link href={item.href}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge>{item.badge.text}</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
