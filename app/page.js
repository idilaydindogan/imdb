import Image from "next/image";
import { Inter } from "next/font/google";
import data from "../data.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center w-full px-20 mx-auto mt-16"></main>
	);
}
