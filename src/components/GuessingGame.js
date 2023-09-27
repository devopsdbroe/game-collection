import React, { useState } from "react";

const GuessingGame = () => {
	const [guess, setGuess] = useState("");
	const [message, setMessage] = useState("");
	const correctNumber = 7;

	const checkGuess = () => {
		if (guess === correctNumber) setMessage("You are correct!");
		else setMessage("Sorry, that's not correct. Please try again.");
	};

	return (
		<>
			<h1>Guessing Game</h1>
			<p>Guess a number between 1 and 10:</p>
			<input
				type='text'
				placeholder='Enter your guess here'
				value={guess}
				onChange={(e) => setGuess(e.target.value)}
			/>
			<button onClick={checkGuess}>Guess</button>
			<p>{message}</p>
		</>
	);
};

export default GuessingGame;
