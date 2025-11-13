import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBook, FaUsers, FaClipboardList, FaHome } from "react-icons/fa";

export default function Layout({ children }) {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "Books", path: "/books", icon: <FaBook /> },
    { name: "Members", path: "/members", icon: <FaUsers /> },
    { name: "Reports", path: "/reports", icon: <FaClipboardList /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white flex flex-col">
        <h2 className="text-2xl font-bold p-6 border-b border-indigo-500">Library</h2>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-lg transition ${
                location.pathname === item.path
                  ? "bg-indigo-500"
                  : "hover:bg-indigo-600"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
