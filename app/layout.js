import "@/styles/globals.css";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import NavBar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
	title: "IMDB",
	description: "IMDB Clone",
	keywords: ["Next.js", "React", "Tailwind", "JavaScript", "IMDB"],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={inter.className}>
			<body>
				<Providers>
					<Header />
					<NavBar />
					<SearchBox />
					{children}
				</Providers>
			</body>
		</html>
	);
}
