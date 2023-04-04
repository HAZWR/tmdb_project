import MovieContainer from "@/components/Movie/MovieContainer";
import { getPopularMovies } from "@/services/tmdb.service";
import "keen-slider/keen-slider.min.css";

export default async function Home() {
  const movies = (await getPopularMovies()).splice(0, 10);

  return (
        <MovieContainer movies={movies}/>
  );
}
