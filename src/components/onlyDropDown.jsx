import React, { useState } from 'react';

const OnlyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("This Week");

  const options = ["Today", "This Week", "Last Week", "This Month"];
  

  return (
    <>
    <div>
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-between items-center pl-12 bg-white border border-none rounded-md text-sm font-medium text-gray-400 hover:bg-gray-50 focus:outline-none"
      >
        {selected}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="lucide lucide-chevron-down ml-2 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <ul className="py-1">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )} 
    </div>
    </div>
    </>
  );
};
export default OnlyDropdown;
