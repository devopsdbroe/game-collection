import Home from "../components/Home";
import CounterGame from "../components/CounterGame";
import GuessingGame from "../components/GuessingGame";
import Game from "../components/TicTacToe/Game";
import ConnectFour from "../components/ConnectFour/ConnectFour";

const games = [
	{ path: "/", name: "Home", component: Home },
	{ path: "/counter-game", name: "Counter Game", component: CounterGame },
	{ path: "/guessing-game", name: "Guessing Game", component: GuessingGame },
	{ path: "/tic-tac-toe", name: "Tic-Tac-Toe", component: Game },
	{ path: "/connect-four", name: "Connect Four", component: ConnectFour },
];

export default games;
