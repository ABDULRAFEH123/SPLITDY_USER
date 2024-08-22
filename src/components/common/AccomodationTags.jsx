"use client";
import React from 'react';
import "@/app/globals.css";

export default function AccomodationTags({ tags, handleTagClick, activeTag }) {
  return (
    <div className='space-x-3'>
      {tags.map((tag, index) => (
        <span
          key={index}
          onClick={() => handleTagClick(index)}
          className={`rounded-full px-3 py-1 text-xs font-medium cursor-pointer ${
            tag === activeTag ? 'bg-black text-white' : 'bg-[#D8D8D8] text-black'
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
