import { FolderMinus, LayoutDashboard, LogOut, MessageCircleMore, Settings, ShoppingBag, UsersRound } from "lucide-react"

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
import { useNavigate } from "react-router-dom"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Orders",
    url: "/Order",
    icon: ShoppingBag,
  },
  {
    title: "Customers",
    url: "/Customers",
    icon: UsersRound,
  },
  {
    title: "Inventory",
    url: "./Inventory",
    icon: FolderMinus,
  },
  {
    title: "Conversations",
    url: "/Conversation",
    icon: MessageCircleMore,
  },
  {
    title: "Settings",
    url: "/Setting",
    icon: Settings,
  },
]

export function AppSidebar() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  // console.log("isCollapsed", isCollapsed);
  const isSm = useBreakpoint("sm");
  const checkCollapseCondition = !isSm && isCollapsed;

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("loggedin")
    navigate("/")
  }
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
                  <SidebarMenuButton asChild className="peer/menu-button flex items-center gap-2 overflow-hidden p-2 text-left outline-hidden ring-sidebar-ring focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 h-8 text-sm w-full justify-start px-3 py-2.5 rounded-lg transition-colors duration-200 ease-in-out text-gray-700 hover:bg-indigo-100 hover:text-indigo-600">
                    <a href={item.url} className="py-5 hover:bg-[#5570F1] focus:bg-[#5570F1] active:bg-[#5570F1]">
                      <item.icon />
                      <span className="font-medium">{item.title}</span>
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
                    <LogOut width="20" height="20" />
                  </p>
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <p className="mt-[6px] text-[#CC5F5F]">
                    <LogOut width="20" height="20" />
                  </p>
                  <p
                    onClick={handleLogout}
                    type="submit"
                    className="text-base font-normal font-urbanist text-[#CC5F5F]">
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