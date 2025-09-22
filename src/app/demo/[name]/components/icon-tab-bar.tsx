import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  IconTabBar,
  IconTabBarContent,
  IconTabBarList,
  IconTabBarTrigger,
} from "@/components/icon-tab-bar";
import { Settings, User, CreditCard, Bell } from "lucide-react";

export const iconTabBar = {
  name: "icon-tab-bar",
  components: {
    Default: (
      <IconTabBar defaultValue="account" className="w-[600px]">
        <IconTabBarList>
          <IconTabBarTrigger value="account">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
              <User className="h-4 w-4" />
            </div>
          </IconTabBarTrigger>
          <IconTabBarTrigger value="password">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
              <Settings className="h-4 w-4" />
            </div>
          </IconTabBarTrigger>
          <IconTabBarTrigger value="billing">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
              <CreditCard className="h-4 w-4" />
            </div>
          </IconTabBarTrigger>
          <IconTabBarTrigger value="notifications">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
              <Bell className="h-4 w-4" />
            </div>
          </IconTabBarTrigger>
        </IconTabBarList>
        <IconTabBarContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </IconTabBarContent>
        <IconTabBarContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </IconTabBarContent>
        <IconTabBarContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>Billing</CardTitle>
              <CardDescription>
                Manage your billing information and subscriptions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Update billing</Button>
            </CardFooter>
          </Card>
        </IconTabBarContent>
        <IconTabBarContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Configure how you receive notifications.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="email" defaultChecked />
                <Label htmlFor="email">Email notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="push" />
                <Label htmlFor="push">Push notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="sms" />
                <Label htmlFor="sms">SMS notifications</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save preferences</Button>
            </CardFooter>
          </Card>
        </IconTabBarContent>
      </IconTabBar>
    ),
  },
};