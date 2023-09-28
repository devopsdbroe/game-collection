import React, { useState } from "react";
import Board from "./Board";

const ConnectFour = () => {
	const createEmptyBoard = () => Array(7).fill(Array(6).fill(null));
	const [board, setBoard] = useState(createEmptyBoard());
	const [isRedTurn, setIsRedTurn] = useState(true);

	const play = (columnIndex) => {
		const newBoard = board.slice();
		const column = newBoard[columnIndex].slice();

		for (let i = 0; i < column.length; i++) {
			if (!column[i]) {
				column[i] = isRedTurn ? "R" : "Y";
				break;
			}
		}

		newBoard[columnIndex] = column;
		setBoard(newBoard);
		setIsRedTurn(!isRedTurn);
	};

	// TODO: Add logic to determine winner

	return (
		<div>
			<h1>Connect Four</h1>
			<Board board={board} play={play} />
		</div>
	);
};

export default ConnectFour;
