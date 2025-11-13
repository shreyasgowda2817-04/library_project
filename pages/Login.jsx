import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import libraryBanner from "../assets/library.jpg";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@library.com" && password === "123456") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid email or password.\nTry: admin@library.com / 123456");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:flex w-1/2 items-center justify-center">
        <img src={libraryBanner} alt="Library Banner" className="w-3/4 rounded-xl shadow-lg" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Library Login</h2>

        <form onSubmit={handleLogin} className="w-3/4 max-w-sm">
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
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

          <p className="text-gray-600 mt-4 text-center">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
