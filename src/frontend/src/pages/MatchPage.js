import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";

import { YearSelector } from "../components/YearSelector";

import "./MatchPage.scss";
import { Navigation } from "../components/Navigation";
import Footer from "../components/Footer";

export const MatchPage = () => {
	const [matches, setMatches] = useState([]);
	const { teamName, year } = useParams();
	useEffect(() => {
		const fetchMatches = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`
			);
			const data = await response.json();
			setMatches(data);
		};
		fetchMatches();
	}, [teamName, year]);

	return (
		<div>
			<Navigation />
			<div className="MatchPage text-xl">
				<div className="year-selector">
					<h3> Select Year </h3>
					<YearSelector teamName={teamName} />
				</div>
				<div className="text-2xl">
					<h1 className="page-heading">
						{teamName} matches in {year}
					</h1>
					{matches.map((match) => (
						<MatchDetailCard
							key={match.id}
							teamName={teamName}
							match={match}
						/>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};
