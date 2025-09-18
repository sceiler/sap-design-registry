"use client";

import { Bell, HelpCircle, Menu, Search, Settings } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Logo } from "./logo";

export function BrandHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="z-50 w-full border-border border-b bg-background">
      <div className="flex h-14 items-center justify-between px-4">
        {/* Left Section: Product Switch + Logo */}
        <div className="flex items-center space-x-2">
          {/* Product Switch / App Launcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8">
                <Menu className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64" align="start">
              <div className="p-2">
                <p className="text-sm font-medium mb-2">SAP Products</p>
                <div className="grid grid-cols-2 gap-2">
                  <DropdownMenuItem className="flex flex-col items-center p-3 h-auto">
                    <div className="w-8 h-8 bg-blue-500 rounded mb-1"></div>
                    <span className="text-xs">Design System</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-center p-3 h-auto">
                    <div className="w-8 h-8 bg-green-500 rounded mb-1"></div>
                    <span className="text-xs">Analytics</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-center p-3 h-auto">
                    <div className="w-8 h-8 bg-orange-500 rounded mb-1"></div>
                    <span className="text-xs">Commerce</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-center p-3 h-auto">
                    <div className="w-8 h-8 bg-purple-500 rounded mb-1"></div>
                    <span className="text-xs">CX</span>
                  </DropdownMenuItem>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View All Applications</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
        </div>

        {/* Center Section: Empty for proper spacing */}
        <div className="flex-1"></div>

        {/* Right Section: Actions + User */}
        <div className="hidden md:flex items-center space-x-2">
          {/* Search */}
          {isSearchOpen ? (
            <div className="relative">
              <Search className="absolute top-2.5 left-3 size-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search components..."
                className="h-9 pl-9 bg-muted/20 border-muted-foreground/20 w-64"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setIsSearchOpen(false);
                  }
                }}
              />
            </div>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(true)}
              className="text-foreground"
            >
              <Search className="size-4" />
            </Button>
          )}

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="size-4" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs"
            >
              3
            </Badge>
          </Button>

          {/* Settings */}
          <Button variant="ghost" size="sm">
            <Settings className="size-4" />
          </Button>

          {/* Help */}
          <Button variant="ghost" size="sm">
            <HelpCircle className="size-4" />
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <span className="text-xs">ME</span>
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuItem className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    john.doe@company.com
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center space-x-2 md:hidden">
          <Button variant="ghost" size="sm" className="relative">
            <Search className="size-4" />
          </Button>
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="size-4" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs"
            >
              3
            </Badge>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
