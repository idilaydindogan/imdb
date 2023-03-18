import Image from "next/image";
import { Inter } from "next/font/google";
import Results from "@/components/Results";

const inter = Inter({ subsets: ["latin"] });
const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
	// const genre = searchParams.genre || "fetchTrending";

	const response = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
		{ next: { revalidate: 10000 } }
	);

	if (!response.ok) {
		throw new Error("Fetching Error");
	}

	const data = await response.json();
	const results = data.results;

	return (
		<main className="flex flex-col items-center justify-center w-full px-20 mx-auto mt-4">
			<Results results={results} />
		</main>
	);
}
