import MoviesSlider from "@/components/MoviesSlider";
import { getPopularMovies } from "@/services/tmdb.service";

import "keen-slider/keen-slider.min.css";

export default async function Home() {
  const movies = await getPopularMovies();

  return (
    <div>
      <MoviesSlider movies={movies.splice(0, 10)} />
    </div>
  );
}
