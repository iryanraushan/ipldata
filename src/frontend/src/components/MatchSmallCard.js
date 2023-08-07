import { React } from "react";
import { Link } from "react-router-dom";

import "./MatchSmallCard.scss";

export const MatchSmallCard = ({ match, teamName }) => {
	if (!match) return null;
	const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
	const otherTeamRoute = `/teams/${otherTeam}`;
	const isMatchWon = teamName === match.matchWinner;
	return (
		<div
			className={
				isMatchWon
					? "MatchSmallCard won-card"
					: "MatchSmallCard lost-card"
			}
		>
			<div className="text-center justify-center items-center">
				<span className="vs">vs</span>
				<div className="text-xl">
					<Link to={otherTeamRoute}>{otherTeam}</Link>
				</div>
				<div className="text-xl">
					<p className="match-result">
						{match.matchWinner} won by {match.resultMargin}{" "}
						{match.result}{" "}
					</p>
				</div>
			</div>
		</div>
	);
};
