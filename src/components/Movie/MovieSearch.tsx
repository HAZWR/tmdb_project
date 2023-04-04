"use client";

import { useState } from "react";
import { useMoviesContext } from "@/context/context";

export default function MovieSearch() {
  const [value, setValue] = useState("");
  const { movies, setMovies } = useMoviesContext();
  return (
    <div className="bg-slate-700 h-100 px-10 py-10 w-full">
      <div className="max-w-xl">
        {value === "" && (
          <div className="flex space-x-1 items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-white text-lg font-semibold">
              Please enter something
            </p>
          </div>
        )}
        <div className="flex space-x-4">
          <div className="flex rounded-md overflow-hidden w-full">
            <input
              defaultValue={value}
              type="text"
              onChange={(e) => setValue(e.target.value)}
              className="w-full rounded-md rounded-r-none"
            />
            <button
              onClick={() =>
                setMovies(
                  movies?.filter((movie) => movie.title.includes(value))
                )
              }
              className="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md"
            >
              Go
            </button>
          </div>
          <button className="bg-white px-6 text-lg font-semibold py-4 rounded-md">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
