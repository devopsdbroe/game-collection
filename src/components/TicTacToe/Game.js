import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "./helpers";

const Game = () => {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [isXNext, setIsXNext] = useState(true);

	const handleClick = (index) => {
		if (squares[index] || calculateWinner(squares)) return;

		const squaresCopy = squares.slice();
		squaresCopy[index] = isXNext ? "X" : "O";
		setSquares(squaresCopy);
		setIsXNext(!isXNext);
	};

	const winner = calculateWinner(squares);
	const status = winner
		? `Winner: ${winner}`
		: `Next player: ${isXNext ? "X" : "O"}`;

	return (
		<div>
			<h1>Tic-Tac-Toe</h1>
			<p>{status}</p>
			<Board squares={squares} onClick={handleClick} />
		</div>
	);
};

export default Game;
