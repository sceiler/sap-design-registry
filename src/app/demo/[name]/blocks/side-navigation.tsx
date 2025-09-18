import SideNavigationPage from "@/app/demo/[name]/blocks/side-navigation-page";
import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const sideNavigation = {
  name: "side-navigation",
  components: {
    Default: (
      <SidebarProvider>
        <div className="h-screen w-full flex">
          <BrandSidebar />
          <main className="flex-1 flex w-full justify-center overflow-auto">
            <div className="container p-6">
              <SideNavigationPage />
            </div>
          </main>
        </div>
      </SidebarProvider>
    ),
  },
};