import React from "react";

export default function Books() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Books</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2 border">Book ID</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Author</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="p-2 border">B001</td>
            <td className="p-2 border">Atomic Habits</td>
            <td className="p-2 border">James Clear</td>
            <td className="p-2 border text-green-600">Available</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="p-2 border">B002</td>
            <td className="p-2 border">The Alchemist</td>
            <td className="p-2 border">Paulo Coelho</td>
            <td className="p-2 border text-red-600">Issued</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="p-2 border">B003</td>
            <td className="p-2 border">Database management system</td>
            <td className="p-2 border">Charles Bachman</td>
            <td className="p-2 border text-green-600">Available</td>
          </tr>
            <tr className="hover:bg-gray-100">
            <td className="p-2 border">B004</td>
            <td className="p-2 border">Python Programming</td>
            <td className="p-2 border">Guido van Rossum</td>
            <td className="p-2 border text-green-600">Available</td>
          </tr>
            <tr className="hover:bg-gray-100">
            <td className="p-2 border">B005</td>
            <td className="p-2 border">Computer Networking</td>
            <td className="p-2 border">Andrew S. Tanenbaum</td>
            <td className="p-2 border text-green-600">Available</td>
          </tr>
            <tr className="hover:bg-gray-100">
            <td className="p-2 border">B006</td>
            <td className="p-2 border">C programming</td>
            <td className="p-2 border">Dennis Ritchie</td>
            <td className="p-2 border text-green-600">Available</td>
          </tr>
            <tr className="hover:bg-gray-100">
            <td className="p-2 border">B007</td>
            <td className="p-2 border">Java Programming</td>
            <td className="p-2 border">James Gosling</td>
            <td className="p-2 border text-green-600">Available</td>
          </tr>
            <tr className="hover:bg-gray-100">
            <td className="p-2 border">B008</td>
            <td className="p-2 border">Data Structures</td>
            <td className="p-2 border">Allen Newell</td>
            <td className="p-2 border text-green-600">Available</td>
          </tr>
            <tr className="hover:bg-gray-100">
            <td className="p-2 border">B009</td>
            <td className="p-2 border">Operating Systems</td>
            <td className="p-2 border">Gary Kildall</td>
            <td className="p-2 border text-green-600">Available</td>
          </tr>
            <tr className="hover:bg-gray-100">
            <td className="p-2 border">B010</td>
            <td className="p-2 border">Pride and Prejudice</td>
            <td className="p-2 border">Jane Austen</td>
            <td className="p-2 border text-red-600">Issued</td>
          </tr>
            <tr className="hover:bg-gray-100">
            <td className="p-2 border">B011</td>
            <td className="p-2 border">The Design of Everyday Things</td>
            <td className="p-2 border">Don Norman</td>
            <td className="p-2 border text-red-600">Issued</td>
          </tr>
            <tr className="hover:bg-gray-100">
            <td className="p-2 border">B012</td>
            <td className="p-2 border">The Great Gatsby</td>
            <td className="p-2 border">F. Scott Fitzgerald</td>
            <td className="p-2 border text-red-600">Issued</td>
          </tr>
            <tr className="hover:bg-gray-100">
            <td className="p-2 border">B013</td>
            <td className="p-2 border">To Kill a Mockingbird</td>
            <td className="p-2 border">Harper Lee</td>
            <td className="p-2 border text-green-600">Available</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
