import React from "react";
import Column from "./Column";

const Board = ({ board, play }) => {
	return (
		<div style={{ display: "flex" }}>
			{board.map((column, index) => (
				<Column key={index} column={column} play={() => play(index)} />
			))}
		</div>
	);
};

export default Board;
