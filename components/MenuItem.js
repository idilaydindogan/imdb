import Link from "next/link";
import React from "react";

const MenuItem = ({ title, address, Icon }) => {
	return (
		<div>
			<Link
				href={address}
				className="mx-2 my-4 text-2xl md:mx-2 hover:text-amber-700"
			>
				<Icon className="mx-2 sm:hidden " />
				<p className="hidden text-sm sm:inline">{title}</p>
			</Link>
		</div>
	);
};

export default MenuItem;
