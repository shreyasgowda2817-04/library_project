import React from 'react';

export default function Modal({ children, open, onClose, title }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-2xl rounded p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button onClick={onClose} className="px-2 py-1">✕</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
