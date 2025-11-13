import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import Members from "./pages/Members";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <Router>
      {isLoggedIn ? (
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-6 bg-gray-100 min-h-screen">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/books" element={<Books />} />
              <Route path="/members" element={<Members />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </Router>
  );
}
