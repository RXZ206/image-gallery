import React from "react";
import { useState } from "react";

export default function ImageSearch({ searchText }) {
  const [text, setText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div className="flex justify-center px-2 py-3">
      <form onSubmit={handleSearch} className="w-full max-w-sm">
        <div className="flex items-center border-b border-green-500 py-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Image Tag"
          />
          <button
            className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
