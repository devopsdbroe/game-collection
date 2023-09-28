import React from "react";

const Cell = ({ value }) => {
	const color = value === "R" ? "red" : value === "Y" ? "yellow" : "white";
	return (
		<div
			style={{
				height: "50px",
				width: "50px",
				borderRadius: "50%",
				backgroundColor: color,
				border: "1px solid black",
			}}
		/>
	);
};

export default Cell;
