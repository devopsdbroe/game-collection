import React from "react";
import Cell from "./Cell";

const Column = ({ column, play }) => {
	return (
		<div
			style={{ display: "flex", flexDirection: "column-reverse" }}
			onClick={play}
		>
			{column.map((cell, index) => (
				<Cell key={index} value={cell} />
			))}
		</div>
	);
};

export default Column;
