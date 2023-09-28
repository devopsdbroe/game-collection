import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import games from "./data/gameData";
import NotFoundComponent from "./components/NotFoundComponent";

function App() {
	return (
		<Router>
			<>
				<nav>
					<ul>
						{games.map((game) => (
							<li key={game.path}>
								<Link to={game.path}>{game.name}</Link>
							</li>
						))}
					</ul>
				</nav>
				<Routes>
					{games.map((game) => (
						<Route
							key={game.path}
							path={game.path}
							element={<game.component />}
						/>
					))}
					<Route path='*' element={<NotFoundComponent />} />
				</Routes>
			</>
		</Router>
	);
}

export default App;
