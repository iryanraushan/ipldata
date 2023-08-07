import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setResults }) => {
	const [input, setInput] = useState("");

	const fetchData = (value) => {
		fetch("http://localhost:8080/team")
			.then((response) => response.json())
			.then((json) => {
				const results = json.filter((user) => {
					return (
						value &&
						user &&
						user.teamName &&
						user.teamName.toLowerCase().includes(value)
					);
				});
				setResults(results);
			});
	};

	const handleChange = (value) => {
		setInput(value);
		fetchData(value);
	};
	return (
		<div className="flex items-center bg-white rounded-lg   p-2">
			<FaSearch color="black" />
			<input
				className="placeholder:italic bg-white placeholder:text-xl placeholder:text-blue-gray-800  border-slate-300 pl-3  focus:outline-none  text-gray-800  text-xl"
				placeholder="Search.."
				type="text"
				value={input}
				onChange={(e) => handleChange(e.target.value)}
			/>
		</div>
	);
};

export default SearchBar;
