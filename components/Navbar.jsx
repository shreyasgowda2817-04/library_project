import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">📚 Library Management System</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:underline">Dashboard</Link>
        <Link to="/books" className="hover:underline">Books</Link>
        <Link to="/members" className="hover:underline">Members</Link>
        <Link to="/reports" className="hover:underline">Reports</Link>
      </div>
    </nav>
  );
}
