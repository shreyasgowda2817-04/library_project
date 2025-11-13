import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import libraryBanner from "../assets/library.jpg";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    alert("Account created! Please login now.");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:flex w-1/2 items-center justify-center">
        <img src={libraryBanner} alt="Library Banner" className="w-full rounded-lg" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Create an Account</h2>

        <form onSubmit={handleSignup} className="w-3/4 max-w-sm">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Sign Up
          </button>

          <p className="text-gray-600 mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
