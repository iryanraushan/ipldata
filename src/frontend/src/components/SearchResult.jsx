import React from "react";
import { Link } from "react-router-dom";
const SearchResult = ({ results }) => {
	return (
		<div className="px-5 py-2.5 hover:bg-[#3b404b] text-xl w-full">
			<Link to={`/teams/${results}`} target="_blank">
				{results}
			</Link>
		</div>
	);
};

export default SearchResult;
