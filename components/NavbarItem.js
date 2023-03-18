"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavbarItem = ({ title, params }) => {
	const searchParams = useSearchParams();

	const genreParams = searchParams.get("genre");
	console.log(genreParams);
	return (
		<div>
			<Link
				href={`/nav/?genre=${params}`}
				className={`hover:text-white dark:hover:text-amber-600 ${
					genreParams &&
					genreParams === params &&
					"underline underline-offset-8 decoration-4 dark:decoration-amber-500 decoration-gray-600 rounded-xl"
				}`}
			>
				{title}
			</Link>
		</div>
	);
};

export default NavbarItem;
