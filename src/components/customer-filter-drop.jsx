import React, { useState, useRef, useEffect } from "react";

const FilterDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  // Close dropdown when clicked outside
  useEffect(() => {
    const handler = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="hidden sm:flex lg:hidden gap-2 w-full sm:w-auto" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border border-gray-300 px-2 py-1 text-sm rounded hover:bg-gray-50"
      >
        ...
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-50">
          <div className="py-1">
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Filter
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Share
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Bulk Action
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdownMenu;
