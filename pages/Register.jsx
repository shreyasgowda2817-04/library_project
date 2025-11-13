import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register(){
  const nav = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    const user = { id: 'u1', name: 'Admin' };
    localStorage.setItem('user', JSON.stringify(user));
    nav('/dashboard');
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={submit} className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        <input placeholder="Name" required className="w-full p-2 border rounded mb-2" />
        <input placeholder="Email" required className="w-full p-2 border rounded mb-2" />
        <input placeholder="Password" required type="password" className="w-full p-2 border rounded mb-4" />
        <div className="flex justify-end">
          <button className="px-4 py-2 bg-green-600 text-white rounded">Register</button>
        </div>
      </form>
    </div>
  );
}
