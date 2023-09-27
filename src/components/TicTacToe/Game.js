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

	const handleReset = () => {
		setSquares(Array(9).fill(null));
		setIsXNext(true);
	};

	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = `Winner: ${winner}`;
	} else if (squares.every((square) => square)) {
		status = "It's a tie!";
	} else {
		status = `Next player: ${isXNext ? "X" : "O"}`;
	}

	return (
		<div>
			<h1>Tic-Tac-Toe</h1>
			<p>{status}</p>
			<Board squares={squares} onClick={handleClick} />
			<button onClick={handleReset}>Reset Board</button>
		</div>
	);
};

export default Game;
