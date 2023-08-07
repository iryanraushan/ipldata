import React from "react";
import Footer from "../components/Footer";

import { Navigation } from "../components/Navigation";
import SocialMedia from "../components/SocialMedia";
const About = () => {
	return (
		<div className="">
			<Navigation />
			<div className="text-3xl my-7 text-center  text-amber-600 font-bold space-y-10">
				About Us
			</div>
			<div className="text-xl text-justify">
				<p>
					Welcome to IPL Dashboard, the ultimate website for IPL fans
					and cricket enthusiasts. IPL Dashboard is a website that
					provides you with the most comprehensive and interactive
					source of IPL match data[2008-2020]. Whether you are a
					casual fan or a hardcore cricket lover, you will find
					something useful and interesting on this website. On IPL
					Dashboard, you can access and analyze match data,
					statistics, and insights from all the seasons of IPL. You
					can explore various aspects of the matches, such as the
					teams, players, venues, tosses, scores, outcomes, and more.
				</p>
			</div>
			<SocialMedia />
			<Footer />
		</div>
	);
};

export default About;
