import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import listOfLetters from "../../assets/letters.json";
import { useHangmanContext } from "../../assets/context/hangmanContext";
const Keyboard = () => {
  const { word, guessedLetters } = useHangmanContext();
  useEffect(() => {
    const getLettersFromFile = async () => {
      fetch(listOfLetters)
        .then((data) => {
          setLetters(data.letters);
        })
        .catch(error);
      // const response = await fetch(listOfLetters)
      // const data = await response.json()
      // setLetters(data.letters);
    };
    const handleClick = (letter) => {
      if (!guessedLetters.includes(letter)) {
        [...guessedLetters, letter]
      }
    };
  });
  return (
    <div className="keyboard">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => handleClick(letter)}
          disabled={guessedLetters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};
export default Keyboard;
