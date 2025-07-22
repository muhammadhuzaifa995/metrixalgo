import { SidebarProvider, useSidebar } from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import type React from "react";
import Header from "./header";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <div className="min-h-screen w-full bg-gray-100">
          <Header />
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
