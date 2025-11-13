import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBook, FaUsers, FaChartLine } from "react-icons/fa";

export default function Sidebar({ sidebarOpen }) {
  const location = useLocation();

  const links = [
    { to: "/", label: "Dashboard", icon: <FaHome /> },
    { to: "/books", label: "Books", icon: <FaBook /> },
    { to: "/members", label: "Members", icon: <FaUsers /> },
    { to: "/reports", label: "Reports", icon: <FaChartLine /> },
  ];

  return (
    <div
      className={`${
        sidebarOpen ? "w-64" : "w-0 md:w-64"
      } bg-blue-700 text-white transition-all duration-300 overflow-hidden`}
    >
      <div className="p-4 text-center text-lg font-semibold border-b border-blue-500">
        Library System
      </div>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`flex items-center px-6 py-2 hover:bg-blue-600 ${
                location.pathname === link.to ? "bg-blue-600" : ""
              }`}
            >
              <span className="mr-3">{link.icon}</span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
