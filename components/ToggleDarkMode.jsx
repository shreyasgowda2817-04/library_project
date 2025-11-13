import React, { useEffect, useState } from 'react';
export default function ToggleDarkMode(){
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : '');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);
  return <button onClick={() => setDark(d => !d)} className="px-3 py-1 border rounded">{dark ? 'Light' : 'Dark'}</button>;
}
