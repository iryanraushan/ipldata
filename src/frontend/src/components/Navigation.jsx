import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultList";

export function Navigation() {
	const [results, setResults] = useState([]);
	return (
		// className="shadow-xl rounded-md max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 flex  justify-between"
		<nav>
			{/* <div>
				<Link className="flex items-center font-bold" to={`/`}>
					<img
						className="h-10 rounded-lg w-auto mr-3"
						src={logo}
						alt="logo"
					/>

					<div className="text-3xl">IPL Dashboard</div>
				</Link>
			</div>
			<div className="flex items-center space-x-4">
				<div className="">
					<SearchBar setResults={setResults} />
					{results && results.length > 0 && (
						<SearchResultsList results={results} />
					)}
				</div>

				<div className="text-2xl ">
					<Link to={`/About`}>About Us</Link>
				</div>
			</div> */}

			<nav class="bg-[#282c34] shadow-xl rounded-md">
				<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 hidden md:ml-6 md:block">
					<div class="relative flex h-16 items-center justify-between">
						<div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
							<div class="flex flex-shrink-0 items-center">
								<Link
									className="flex items-center font-bold"
									to={`/`}
								>
									<img
										className="h-10 rounded-lg w-auto mr-3"
										src={logo}
										alt="logo"
									/>

									<div className="text-2xl">
										IPL Dashboard
									</div>
								</Link>
							</div>
						</div>
						<div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-5">
							<div>
								<SearchBar setResults={setResults} />
								{results && results.length > 0 && (
									<SearchResultsList results={results} />
								)}
							</div>
							<div className="text-2xl ">
								<Link to={`/About`}>About Us</Link>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Mobile menu, show/hide based on menu state. --> */}
				<div class="md:hidden p-2" id="mobile-menu">
					<div className="flex flex-col space-y-5 ">
						<div className="flex  justify-around">
							<div>
								<Link to={`/`}>
									<img
										className="h-10 rounded-lg"
										src={logo}
										alt="logo"
									/>
								</Link>
							</div>
							<div className="text-2xl">
								<Link to={`/About`}>About Us</Link>
							</div>
						</div>
						<div>
							<SearchBar setResults={setResults} />
							{results && results.length > 0 && (
								<SearchResultsList results={results} />
							)}
						</div>
					</div>
				</div>
			</nav>
		</nav>
	);
}
