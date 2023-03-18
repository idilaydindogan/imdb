import Image from "next/image";
import { Inter } from "next/font/google";
import Results from "@/components/Results";

const inter = Inter({ subsets: ["latin"] });
const API_KEY = process.env.API_KEY;

async function Nav({ searchParams }) {
	const genre = searchParams.genre || "fetchTrending";

	const response = await fetch(
		`https://api.themoviedb.org/3/${
			genre === "popular"
				? "movie/popular"
				: genre === "fetchTopRated"
				? "movie/top_rated"
				: "trending/all/week"
		}?api_key=${API_KEY}&language=en-US&page=1`,
		{ next: { revalidate: 10000 } }
	);

	// const response = await fetch(
	// 	`https://api.themoviedb.org/3/${
	// 		genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
	// 	}?api_key=${API_KEY}&language=en-US&page=1`,
	// 	{ next: { revalidate: 10000 } }
	// );

	if (!response.ok) {
		throw new Error("Fetching Error");
	}

	const data = await response.json();
	const results = data.results;

	return (
		<main className="flex flex-col items-center justify-center w-full px-20 mx-auto mt-16">
			<Results results={results} />
		</main>
	);
}

export default Nav;
