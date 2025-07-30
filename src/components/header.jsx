import React from "react";
import { useSidebar } from "./ui/sidebar";
import { AlignJustify } from 'lucide-react';
import { useLocation } from 'react-router-dom';

function Header() {
  const { toggleSidebar } = useSidebar();
  const location = useLocation();
  const path = location.pathname;
  const pageNames = {
  "/Dashboard": "Dashboard",
  "/Order": "Order",
  "/Customers": "Customers",
  "/Conversation": "Conversation",
  "/Setting": "Setting",
  "/Inventory": "Inventory",

};
const pageTitle = pageNames[path] || "Page";


  return (
    <header className="fixed top-0 z-50 bg-white border-b w-full px-4 py-4 flex items-center gap-4 shadow">
      <button onClick={toggleSidebar}>
        <AlignJustify className="size-5 hover:bg-[#F5F5F5] rounded-md " />
      </button>
      <h1 className="text-2xl font-bold">{pageTitle}</h1>
    </header>
  );
}

export default Header;
