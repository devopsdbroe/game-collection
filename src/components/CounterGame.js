import React, { useState } from "react";

const CounterGame = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Counting "Game"</h1>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>Increase</button>
			<button onClick={() => setCount(count - 1)}>Decrease</button>
			<button onClick={() => setCount(0)}>Reset</button>
		</>
	);
};

export default CounterGame;
