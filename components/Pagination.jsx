import React from 'react';

export default function Pagination({ page, total, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <button onClick={() => onChange(Math.max(1, page - 1))} className="px-3 py-1 border rounded" disabled={page === 1}>Prev</button>
      <span>{page} / {total}</span>
      <button onClick={() => onChange(Math.min(total, page + 1))} className="px-3 py-1 border rounded" disabled={page === total}>Next</button>
    </div>
  );
}
