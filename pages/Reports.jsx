import React from "react";

export default function Reports() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <p>Recent Issue & Return Reports:</p>
      <div className="mt-4 space-y-3">
        <div className="p-3 border rounded-lg">
          <strong>Issued:</strong> “Ikigai” to <em>Ananya</em> (Oct 25, 2025)
        </div>
        <div className="p-3 border rounded-lg">
          <strong>Returned:</strong> “Think Like a Monk” by <em>John</em> (Oct 22, 2025)
        </div>
      </div>
    </div>
  );
}
