import React from "react";

const Square = ({ value, onClick }) => {
	return (
		<button
			style={{ height: "60px", width: "60px", fontSize: "24px" }}
			onClick={onClick}
		>
			{value}
		</button>
	);
};

export default Square;
