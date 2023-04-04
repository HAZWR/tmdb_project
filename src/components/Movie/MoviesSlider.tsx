"use client";

import { useMoviesContext } from "@/context/context";
import { useKeenSlider } from "keen-slider/react";
import MovieCard from "./MovieCard";

export default function MoviesSlider() {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 5,
    },
  });
  const {movies}=useMoviesContext();
  return (
    <div ref={sliderRef} className="keen-slider">
      {movies?.map((movie, index) => (
        <div key={index} className="keen-slider__slide">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}
