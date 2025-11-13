import React from "react";

export default function Profile() {
  const admin = {
    name: "Admin User",
    email: "admin@library.local",
    role: "Administrator",
    joined: "2023-06-01"
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Profile</h1>

      <div className="bg-white p-4 rounded-lg shadow-sm max-w-md">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-2xl">A</div>
          <div>
            <div className="text-lg font-medium">{admin.name}</div>
            <div className="text-sm text-slate-500">{admin.email}</div>
          </div>
        </div>

        <div className="mt-4 text-sm text-slate-700">
          <div><strong>Role:</strong> {admin.role}</div>
          <div className="mt-2"><strong>Member since:</strong> {admin.joined}</div>
        </div>
      </div>
    </div>
  );
}
