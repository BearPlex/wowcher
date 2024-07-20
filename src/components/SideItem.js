// src/components/SideItem.js
import React from "react";
import { NavLink } from "react-router-dom";

const SideItem = ({ label, svg, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `group flex items-center p-2 rounded-md cursor-pointer transition duration-300 ${
          isActive ? "bg-[#ececee] text-[#EF5DA8]" : "text-black"
        }`
      }
    >
      <div className="mr-4">
        <svg className="h-6 w-6 text-current transition duration-300 group-hover:text-[#EF5DA8]">
          {svg}
        </svg>
      </div>
      <span className="transition duration-300 group-hover:text-[#EF5DA8] text-sm font-semibold">
        {label}
      </span>
    </NavLink>
  );
};

export default SideItem;
