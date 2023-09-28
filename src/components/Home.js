import React from "react";
import { Link } from "react-router-dom";
import games from "../data/gameData";

const Home = () => {
	return (
		<div>
			<h1>Welcome to the Game Collection</h1>
			<p>Select a game to play:</p>
			<ul>
				{games.map((game) =>
					game.name !== "Home" ? (
						<li key={game.path}>
							<Link to={game.path}>{game.name}</Link>
						</li>
					) : null
				)}
			</ul>
		</div>
	);
};

export default Home;
