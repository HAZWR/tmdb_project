"use client";
import { Movie } from "@/models";

import Link from "next/link";
import Image from "next/image";

export default function MovieCard({
  movie,
  hasDetails = true,
}: {
  movie: Movie;
  hasDetails?: boolean;
}) {
  return (
    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
      <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
        <div className="mx-auto max-w-xs flex flex-col justify-center items-center gap-5">
          <p className="text-base font-semibold text-gray-600">{movie.title}</p>
          <Image
            width={200}
            height={300}
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${movie.poster_path}`}
            alt={""}
          />
          <p className="mt-6 flex items-baseline justify-center gap-x-2">
            <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
              {movie.genres.map((genre) => genre.name).join(", ")}
            </span>
          </p>
          {hasDetails && (
            <Link
              className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              href={`/movie/${movie.id}`}
            >
              Get details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
