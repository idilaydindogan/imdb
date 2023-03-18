"use client";
import React from "react";
import { useEffect } from "react";

const Error = ({ error, reset }) => {
	useEffect(() => {
		console.log(error);
	}, [error]);

	return (
		<div className="mt-16 font-bold text-center">
			<h1>Something went wrong</h1>
			<button onClick={() => reset()} className="hover:text-amber-600">
				Try Again
			</button>
		</div>
	);
};

export default Error;
