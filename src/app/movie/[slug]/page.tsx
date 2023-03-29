import MovieCard from "@/components/MovieCard";
import { getMovieById } from "@/services/tmdb.service";

export default async function Page({ params }: { params: { slug: number } }) {
  const movie = await getMovieById(params.slug);

  return (
    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">
          Popularity : {movie.popularity}
        </h3>
        <p className="mt-6 text-base leading-7 text-gray-600">
          {movie.overview}
        </p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
            Date sortie: {movie.release_date}
          </h4>
          <div className="h-px flex-auto bg-gray-100"></div>
        </div>
      </div>
      <MovieCard movie={movie} hasDetails={false} />
    </div>
  );
}
