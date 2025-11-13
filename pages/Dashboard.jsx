import React from "react";
import {
  FaBook,
  FaUsers,
  FaClipboardList,
  FaChartPie,
  FaBookReader,
  FaUserGraduate,
  FaCalendarAlt,
} from "react-icons/fa";
import libraryBanner from "../assets/library.jpg";


export default function Dashboard() {
  // 🔹 Book Data
  const books = [
    { title: "Python Programming", author: "F. Scott Fitzgerald", category: "Classic", available: true },
    { title: "Datbase Mangement System", author: "Harper Lee", category: "Fiction", available: true },
    { title: "'C' Programming", author: "George Orwell", category: "Dystopian", available: true },
    { title: "Computer Network", author: "Jane Austen", category: "Romance", available: true },
    { title: "The Alchemist", author: "Paulo Coelho", category: "Philosophy", available: false },
  ];

  // 🔹 Member Data
  const members = [
    { name: "Shreyas Gowda", id: "M001", joined: "Jan 2024", booksIssued: 2 },
    { name: "Chethan Gowda", id: "M002", joined: "Feb 2024", booksIssued: 1 },
    { name: "Nirmal", id: "M003", joined: "Mar 2024", booksIssued: 3 },
    { name: "Deekshith KC", id: "M004", joined: "Apr 2024", booksIssued: 0 },
    { name: "Raval Ram", id: "M005", joined: "May 2024", booksIssued: 1 },
    { name: "Maha Lakshmi", id: "M006", joined: "Oct 2025", booksIssued:1 },
    { name: "Chandana YM", id: "M007", joined: "May 2024", booksIssued: 4},
  ];

  // 🔹 Reports Data
  const reports = [
    { name: "Monthly Report", date: "October 2025", summary: "Summary of library activity this month." },
    { name: "Overdue Books", date: "October 2025", summary: "List of books not returned on time." },
    { name: "New Members Report", date: "October 2025", summary: "Summary of all new members this month." },
    { name: "Top Borrowed Books", date: "October 2025", summary: "Most popular books among readers." },
    
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Banner Section */}
      <div className="relative w-full h-80">
        <img
          src={libraryBanner}
          alt="library Banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl font-bold">📚 Library Management System</h1>
          <p className="text-lg mt-2">Track books, members, and reports — all in one place</p>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="p-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
          <FaBook className="text-4xl text-indigo-500 mx-auto mb-3" />
          <h2 className="text-xl font-semibold">Total Books</h2>
          <p className="text-gray-600 mt-1">{books.length} books available</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
          <FaUsers className="text-4xl text-green-500 mx-auto mb-3" />
          <h2 className="text-xl font-semibold">Total Members</h2>
          <p className="text-gray-600 mt-1">{members.length} registered</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
          <FaClipboardList className="text-4xl text-yellow-500 mx-auto mb-3" />
          <h2 className="text-xl font-semibold">Active Reports</h2>
          <p className="text-gray-600 mt-1">{reports.length} generated</p>
        </div>
      </div>

      {/* Books Section */}
      <section className="px-10 pb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FaBookReader className="text-indigo-600" /> Library Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow hover:shadow-2xl transition border-l-4 border-indigo-400">
              <h3 className="text-lg font-semibold text-indigo-700">{book.title}</h3>
              <p className="text-gray-600">by {book.author}</p>
              <p className="text-sm text-gray-500 mt-1">Category: {book.category}</p>
              <p
                className={`mt-2 font-semibold ${
                  book.available ? "text-green-600" : "text-red-500"
                }`}
              >
                {book.available ? "Available" : "Issued"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Members Section */}
      <section className="px-10 pb-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FaUserGraduate className="text-green-600" /> Library Members
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow hover:shadow-2xl transition border-l-4 border-green-400">
              <h3 className="text-lg font-semibold text-green-700">{member.name}</h3>
              <p className="text-gray-600">ID: {member.id}</p>
              <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                <FaCalendarAlt /> Joined: {member.joined}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Books Issued:{" "}
                <span className="font-semibold text-gray-800">{member.booksIssued}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Reports Section */}
      <section className="px-10 pb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FaChartPie className="text-yellow-600" /> Reports & Insights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow hover:shadow-2xl transition border-l-4 border-yellow-400">
              <h3 className="text-lg font-semibold text-yellow-700">{report.name}</h3>
              <p className="text-gray-600">Date: {report.date}</p>
              <p className="text-gray-500 text-sm mt-2">{report.summary}</p>
              <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                View Report
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

