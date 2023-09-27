import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
	return (
		<div
			style={{
				display: "grid",
				gridTemplate: "repeat(1, 2fr) / repeat(3, 1fr)",
				width: "180px",
				height: "180px",
			}}
		>
			{squares.map((value, index) => (
				<Square key={index} value={value} onClick={() => onClick(index)} />
			))}
		</div>
	);
};

export default Board;
