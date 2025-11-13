import React from 'react';
export default function Footer(){
  return (
    <footer className="bg-white border-t p-3 text-center text-sm">
      © {new Date().getFullYear()} Library Management • Built with React + Tailwind
    </footer>
  );
}
