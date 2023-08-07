import { React, useEffect, useState } from "react";
import "./HomePage.scss";
import { TeamTile } from "../components/TeamTile";
import { Navigation } from "../components/Navigation";
import Footer from "../components/Footer";
import SocialMedia from "../components/SocialMedia";

export const HomePage = () => {
	const [teams, setTeams] = useState([]);
	useEffect(() => {
		const fetchAllTeams = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_API_ROOT_URL}/team`
			);
			const data = await response.json();
			setTeams(data);
		};
		fetchAllTeams();
	}, []);

	return (
		<>
			<Navigation />
			<div>
				<div className="text-3xl py-3 text-center">IPL Matches</div>
				<div className="HomePage text-2xl py-4 ">
					<div className="team-grid shadow-xl rounded-md ">
						{teams.map((team) => (
							<TeamTile key={team.id} teamName={team.teamName} />
						))}
					</div>
				</div>
			</div>
			<SocialMedia />
			<Footer />
		</>
	);
};
