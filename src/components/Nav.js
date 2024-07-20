// src/components/Nav.js
import React from "react";
import DropdownGrid from "./GridDropdown";

const Navbar = ({ toggleSidebar }) => {
  const dropdowns = [
    {
      name: "deals_filter",
      label: "Deals Filter",
      options: [
        { value: "deal_1", label: "Deal 1" },
        { value: "deal_2", label: "Deal 2" },
        { value: "deal_3", label: "Deal 3" },
      ],
    },
    {
      name: "date_filter",
      label: "Date Filter",
      options: [
        { value: "23", label: "23 Feb - 03 Mar ‘24" },
        { value: "02", label: "02 Aug - 12 Nov ‘24" },
        { value: "05", label: "05 Oct - 13 Dec ‘24" },
      ],
    },
    {
      name: "category",
      label: "Category",
      options: [
        { value: "category_1", label: "Category 1" },
        { value: "category_2", label: "Category 2" },
        { value: "category_3", label: "Category 3" },
      ],
    },
    {
      name: "subcategory",
      label: "Subcategory",
      options: [
        { value: "subcategory_1", label: "Subcategory 1" },
        { value: "subcategory_2", label: "Subcategory 2" },
        { value: "subcategory_3", label: "Subcategory 3" },
      ],
    },
    {
      name: "deal_status",
      label: "Deal Status",
      options: [
        { value: "active", label: "Active" },
        { value: "inactive", label: "Inactive" },
      ],
    },
  ];

  return (
    <nav className="bg-custom-gradient p-4 flex items-center md:flex-row flex-col">
      <div className="md:w-1/5 w-full flex justify-between items-center">
        <img src="/images/logo.svg" alt="logo" />
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleSidebar} // Ensure toggleSidebar is correctly called as a function
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div className="md:block hidden w-full">
      <div className="flex items-center w-full">
      <DropdownGrid dropdowns={dropdowns} />

      </div>
      </div>
    </nav>
  );
};

export default Navbar;
