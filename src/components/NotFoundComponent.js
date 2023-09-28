import React from "react";

const NotFoundComponent = () => {
	return (
		<div style={styles.container}>
			<h1>404</h1>
			<p>Page Not Found</p>
			<p>The page you are looking for doesn't exist or has been moved.</p>
		</div>
	);
};

const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		height: "70vh",
		textAlign: "center",
		fontSize: "1.2em",
		color: "#666",
	},
};

export default NotFoundComponent;
