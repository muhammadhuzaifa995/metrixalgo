import { Calendar, Home, Inbox, LogOut, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar"
import { useBreakpoint } from "../hooks/use-breakpoint";
import React from "react";
import { cn } from "../lib/utils";

// Menu items.
const items = [
  {
    title: "Orders",
    url: "#",
    icon: Home,
  },
  {
    title: "Customers",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Inventory",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Conversations",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  console.log("isCollapsed", isCollapsed);
  const isSm = useBreakpoint("sm");
  const checkCollapseCondition = !isSm && isCollapsed;
  return (
    <Sidebar collapsible="icon" onCollapseChange={setIsCollapsed}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="flex gap-3 items-center">
              <img src="/src/assets/Graph-logo.png" alt="Graph-logo" className='h-10 w-10 shrink-0' />
              <span className="text-[20px] font-bold text-gray-900">Metrix</span>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
       <SidebarFooter className="mb-4">
        <SidebarMenu>
          <SidebarMenuItem
            className={cn("", checkCollapseCondition ? "" : " ")}
          >
            <SidebarMenuButton
              size={"logout"}
              className={cn("",
                checkCollapseCondition
                  // ? "!h-[80px]"
                  // : " h-[60px] px-[10px] py-4 "
              )}
            >
              {checkCollapseCondition ? (
                <div className="flex items-center gap-1 ">
                  <p className="mt-[6px]">
                    <LogOut width="20" height="20"/>
                  </p>
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <p className="mt-[6px] text-[#CC5F5F]">
                    <LogOut width="20" height="20"/>
                  </p>
                  <p className="text-base font-normal font-urbanist text-[#CC5F5F]">
                    Logout
                  </p>
                </div>
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
   
  )
}