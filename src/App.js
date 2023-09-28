import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import CounterGame from "./components/CounterGame";
import GuessingGame from "./components/GuessingGame";
import Game from "./components/TicTacToe/Game";
import ConnectFour from "./components/ConnectFour/ConnectFour";

function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/counter-game'>Counter Game</Link>
						</li>
						<li>
							<Link to='/guessing-game'>Guessing Game</Link>
						</li>
						<li>
							<Link to='/tic-tac-toe'>Tic-Tac-Toe</Link>
						</li>
						<li>
							<Link to='/connect-four'>Connect Four</Link>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path='/' exact Component={Home} />
					<Route path='/counter-game' Component={CounterGame} />
					<Route path='/guessing-game' Component={GuessingGame} />
					<Route path='/tic-tac-toe' Component={Game} />
					<Route path='/connect-four' Component={ConnectFour} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
