import React from "react";

export default function Table({ columns, data, actions }) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
      <table className="min-w-full divide-y">
        <thead className="bg-slate-50">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3 text-left text-sm font-medium text-slate-600">
                {col.title}
              </th>
            ))}
            <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length + 1} className="px-4 py-6 text-center text-sm text-slate-500">
                No records found.
              </td>
            </tr>
          )}
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-slate-50">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-sm text-slate-700">
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
              <td className="px-4 py-3 text-sm">
                {actions ? actions(row) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
