import "./App.scss";
import { TeamPage } from "./pages/TeamPage";
import { MatchPage } from "./pages/MatchPage";
import { HomePage } from "./pages/HomePage";

import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
	return (
		<div className="App">
			<HashRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route
						path="/teams/:teamName/matches/:year"
						element={<MatchPage />}
					/>
					<Route path="/teams/:teamName" element={<TeamPage />} />
					<Route path="/About" element={<About />} />
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
