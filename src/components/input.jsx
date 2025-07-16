import React from 'react';
import '../App.css';
export function Input({ value, onChange, placeholder, className }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`px-4 py-2 rounded-md bg-white text-black w-full ${className}`}
    />
  );
}