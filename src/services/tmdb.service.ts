import { Movie } from "@/models";

export async function getPopularMovies(){
    const moviesIds = await fetch(`${process.env.TMDB_API_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}`)
    .then(response => response.json())
    .then(data => data.results.map((movie:Movie)=> movie.id));
    return Promise.all(moviesIds.map((movieId:number) => getMovieById(movieId)));
}

export async function getMovieById(movieId:number){
    return fetch(`${process.env.TMDB_API_URL}/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`)
    .then(response=>response.json());
}