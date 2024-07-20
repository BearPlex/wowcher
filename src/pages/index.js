// src/pages/Index.js
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav";
import Sidebar from "../components/Sidebar";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  return (
    <div className="relative w-full">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex w-full">
        <div
          className={`fixed z-50 md:relative md:translate-x-0 bg-white w-72   transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out overflow-auto max-h-screen`}
        >
          <Sidebar />
        </div>
        <div
          className={`w-full max-w-7xl mx-auto transition duration-300 ease-in-out ${
            sidebarOpen ? "blur-sm" : ""
          }`}
        >
          <Outlet />
        </div>
      </div>
      {sidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 z-40"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Index;
