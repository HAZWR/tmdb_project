"use client";
import { useMoviesContext } from "@/context/context";
import { Movie } from "@/models";
import { useEffect } from "react";
import MovieSearch from "./MovieSearch";
import MoviesSlider from "./MoviesSlider";

export default function MovieContainer({ movies }: { movies: Movie[] }) {
  const { setMovies } = useMoviesContext();

  useEffect(() => {
    setMovies(movies);
  }, []);
  return (
    <div>
      <MovieSearch />
      <MoviesSlider />
    </div>
  );
}
