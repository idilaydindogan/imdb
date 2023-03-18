import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

const Cards = ({ result }) => {
	return (
		<div className="flex justify-start p-3 m-2 transition-shadow border rounded-lg shadow-md cursor-pointer hover:shadow-slate-400 border-slate-400 flex-cols group">
			<Link href={`/movie/${result.id}`}>
				<Image
					src={`https://image.tmdb.org/t/p/original/${
						result.poster_path || result.backdrop_path
					}`}
					width={400}
					height={200}
					alt={result.title}
					className="transition-opacity duration-200 sm:rounded-t-lg group-hover:opacity-80"
					placeholder="blur"
					blurDataURL="/spinner.svg"
					style={{ maxWidth: "100%", height: "auto" }}
				/>
				<div className="flex flex-col mt-3 space-y-3">
					<h4 className="font-bold text-center">
						{result.title ? result.title : result.original_title}
					</h4>
					<p className="text-sm line-clamp-2">{result.overview}</p>
					<p className="flex items-center text-xs">
						{result.release_date}
						<FiThumbsUp className="h-5 ml-3 mr-1 " />
						{result.vote_count}
					</p>
				</div>
			</Link>
		</div>
	);
};

export default Cards;
