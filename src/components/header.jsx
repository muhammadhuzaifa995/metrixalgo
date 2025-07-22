import React from "react";
import { useSidebar } from "./ui/sidebar";
import { AlignJustify } from 'lucide-react';



function Header() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="fixed top-0 z-50 bg-white border-b w-full px-4 py-4 flex items-center gap-4 shadow">
      <button onClick={toggleSidebar}>
        <AlignJustify className="size-5 hover:bg-[#F5F5F5] rounded-md " />
        </button>
    </header>
  );
}

export default Header;
