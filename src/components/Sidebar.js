// src/components/Sidebar.js
import React from "react";
import SideItem from "./SideItem";
import { IoExitOutline } from "react-icons/io5";

const Sidebar = () => {
  const items = [
    {
      label: "Dashboard",
      svg: (
        <path d="M3 13h8V3H3v10zM3 21h8v-6H3v6zM13 21h8V11h-8v10zM13 3v6h8V3h-8z" />
      ),
      path: "dashboard",
    },
    {
      label: "Overview",
      svg: (
        <path d="M12 8c-2.21 0-4.02 1.79-4.02 4S9.79 16 12 16s4.02-1.79 4.02-4S14.21 8 12 8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM14.84 14.82l-1.41 1.41-3.34-3.34-3.34 3.34-1.41-1.41L8.68 12l-3.34-3.34 1.41-1.41L12 10.18l3.34-3.34 1.41 1.41L13.32 12l3.52 3.34z" />
      ),
      path: "overview",
    },
    {
      label: "Product Level Information",
      svg: (
        <path
          d="M13.6666 6.16665H3.52492L8.18325 1.50831L6.99992 0.333313L0.333252 6.99998L6.99992 13.6666L8.17492 12.4916L3.52492 7.83331H13.6666V6.16665Z"
          fill="#111927"
        />
      ),
      path: "product",
    },
    {
      label: "Daily Performance",
      svg: (
        <path
          d="M13.6666 6.16665H3.52492L8.18325 1.50831L6.99992 0.333313L0.333252 6.99998L6.99992 13.6666L8.17492 12.4916L3.52492 7.83331H13.6666V6.16665Z"
          fill="#111927"
        />
      ),
      path: "daily",
    },
    {
      label: "Weekly Performance",
      svg: (
        <path
          d="M13.6666 6.16665H3.52492L8.18325 1.50831L6.99992 0.333313L0.333252 6.99998L6.99992 13.6666L8.17492 12.4916L3.52492 7.83331H13.6666V6.16665Z"
          fill="#111927"
        />
      ),
      path: "weekly",
    },
    {
      label: "Customer Feedback",
      svg: (
        <path
          d="M13.6666 6.16665H3.52492L8.18325 1.50831L6.99992 0.333313L0.333252 6.99998L6.99992 13.6666L8.17492 12.4916L3.52492 7.83331H13.6666V6.16665Z"
          fill="#111927"
        />
      ),
      path: "feedback",
    },
    {
      label: "Dispatch Tracking",
      svg: (
        <path
          d="M13.6666 6.16665H3.52492L8.18325 1.50831L6.99992 0.333313L0.333252 6.99998L6.99992 13.6666L8.17492 12.4916L3.52492 7.83331H13.6666V6.16665Z"
          fill="#111927"
        />
      ),
      path: "tracking",
    },
    {
      label: "Google Shopping Data",
      svg: (
        <path
          d="M13.6666 6.16665H3.52492L8.18325 1.50831L6.99992 0.333313L0.333252 6.99998L6.99992 13.6666L8.17492 12.4916L3.52492 7.83331H13.6666V6.16665Z"
          fill="#111927"
        />
      ),
      path: "shopping",
    },
    {
      label: "Customer Information",
      svg: (
        <path
          d="M13.6666 6.16665H3.52492L8.18325 1.50831L6.99992 0.333313L0.333252 6.99998L6.99992 13.6666L8.17492 12.4916L3.52492 7.83331H13.6666V6.16665Z"
          fill="#111927"
        />
      ),
      path: "customer",
    },
    {
      label: "Deal Perf. Comparison",
      svg: (
        <path
          d="M13.6666 6.16665H3.52492L8.18325 1.50831L6.99992 0.333313L0.333252 6.99998L6.99992 13.6666L8.17492 12.4916L3.52492 7.83331H13.6666V6.16665Z"
          fill="#111927"
        />
      ),
      path: "deal",
    },
    {
      label: "Fee Breakdown",
      svg: (
        <path
          d="M13.6666 6.16665H3.52492L8.18325 1.50831L6.99992 0.333313L0.333252 6.99998L6.99992 13.6666L8.17492 12.4916L3.52492 7.83331H13.6666V6.16665Z"
          fill="#111927"
        />
      ),
      path: "fee",
    },
    {
      label: "Vouchers Paid",
      svg: (
        <path
          d="M13.6666 6.16665H3.52492L8.18325 1.50831L6.99992 0.333313L0.333252 6.99998L6.99992 13.6666L8.17492 12.4916L3.52492 7.83331H13.6666V6.16665Z"
          fill="#111927"
        />
      ),
      path: "paid",
    },
    {
      label: "Remittance",
      svg: (
        <path
          d="M13.6666 6.16665H3.52492L8.18325 1.50831L6.99992 0.333313L0.333252 6.99998L6.99992 13.6666L8.17492 12.4916L3.52492 7.83331H13.6666V6.16665Z"
          fill="#111927"
        />
      ),
      path: "remittance",
    },
    {
      label: "Preferred Partner",
      svg: (
        <path
          d="M13.6666 6.16665H3.52492L8.18325 1.50831L6.99992 0.333313L0.333252 6.99998L6.99992 13.6666L8.17492 12.4916L3.52492 7.83331H13.6666V6.16665Z"
          fill="#111927"
        />
      ),
      path: "partner",
    },
  ];

  return (
    <div className="flex flex-col bg-white">
      <div className="overflow-auto max-h-[500px] md:max-h-screen p-3">
        {items.map((item, index) => (
          <SideItem
            key={index}
            label={item.label}
            svg={item.svg}
            path={item.path}
          />
        ))}
      </div>
      <div className="border-t p-2  flex gap-1 items-start w-full bg-transparent">
        <img
          src="/images/ibrahim.jpeg"
          alt="Profile"
          className="h-9 w-9 rounded-full"
        />
        <div className="flex-1">
          <p className="text-sm text-[#1D2939] max-w-32 truncate font-medium">
            Ibrahim Hammayun
          </p>
          <p className="text-xs text-[#1D2939] max-w-32 truncate">
            ibrahim@bearplex.com
          </p>
        </div>
        <button className="focus:outline-none mt-1">
          <IoExitOutline />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
