import { React } from "react";
import { Link } from "react-router-dom";

import "./TeamTile.scss";
export const TeamTile = ({ teamName }) => {
	return (
		<div className="TeamTile  shadow-sm rounded-md">
			<div className="text-3xl">
				<Link to={`/teams/${teamName}`}>{teamName}</Link>
			</div>
		</div>
	);
};
