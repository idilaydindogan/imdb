import React from "react";
import NavbarItem from "@/components/NavbarItem";

const NavBar = () => {
	return (
		<div className="flex justify-center p-4 space-x-6 font-medium lg:text-lg dark:bg-gray-600 bg-amber-500 ">
			<NavbarItem title="Trending" params="fetchTrending" />
			<NavbarItem title="Top Rated" params="fetchTopRated" />
		</div>
	);
};

export default NavBar;
