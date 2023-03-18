import React from "react";
import Image from "next/image";
const API_KEY = process.env.API_KEY;

const fetchMovieId = async (movieId) => {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
	);
	return response.json();
};

const Movie = async ({ params }) => {
	const movieId = params.id;
	const data = await fetchMovieId(movieId);
	console.log(data);

	return (
		<div className="w-full">
			<div className="flex flex-col items-center content-center max-w-6xl p-4 mx-auto md:pt-8 md:flex-row md:space-x-6">
				<Image
					src={`https://image.tmdb.org/t/p/original/${
						data.poster_path || data.backdrop_path
					}`}
					width={400}
					height={200}
					alt={data.title}
					className="rounded-lg "
					placeholder="blur"
					blurDataURL="/spinner.svg"
					style={{ maxWidth: "100%", height: "100%" }}
				/>
				<div className="p-5">
					<h2 className="mb-3 text-lg font-bold">
						{data.title || data.original_title}
					</h2>
					<p className="mt-2">
						<span className="mr-1 font-semibold">Overview: </span>
						{data.overview}
					</p>
					<p className="mt-2">
						<span className="mr-1 font-semibold ">Date Released: </span>
						{data.release_date}
					</p>
					<p className="mt-2">
						<span className="mr-1 font-semibold ">Rating: </span>
						{data.vote_count}
					</p>

					<p className="flex mt-2 space-x-2">
						<span className="mr-1 font-semibold ">Genre: </span>
						{data.genres.map((genre) => (
							<div key={genre.id} className="">
								{genre.name}
							</div>
						))}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Movie;
