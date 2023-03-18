"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
	const [search, setSearch] = useState("");
	const router = useRouter();
	function handleSubmit(e) {
		e.preventDefault();
		if (!search) return;
		router.push(`/search/${search}`);
	}
	return (
		<form className="flex items-center p-8" onSubmit={handleSubmit}>
			<input
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				type="text"
				placeholder="Search keywords..."
				className="flex-1 w-full text-gray-700 placeholder-gray-500 bg-transparent rounded-sm outline-none dark:text-gray-200"
			/>
			<button
				disabled={!search}
				type="submit"
				className="text-amber-500 disabled:text-gray-400"
			>
				Search
			</button>
		</form>
	);
};

export default SearchBox;
