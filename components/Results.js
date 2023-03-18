import React from "react";
import Cards from "./Cards";

const Results = ({ results }) => {
	return (
		<div className="grid max-w-full grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-4">
			{results.map((result) => (
				<Cards key={result.id} result={result} />
			))}
		</div>
	);
};

export default Results;
