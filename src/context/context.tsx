"use client";

import { Movie } from "@/models";
import { createContext, ReactNode, useContext, useState } from "react";

const MoviesContext = createContext<{ movies?: Movie[]; setMovies?: any }>({});

export const MoviesContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [movies, setMovies] = useState([]);

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = () => useContext(MoviesContext);
