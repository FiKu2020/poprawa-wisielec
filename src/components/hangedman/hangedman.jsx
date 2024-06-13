import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Word from "../word/Word";
import Keyboard from "../keyboard/Keyboard";
const Hangman = ({ wordsList }) => {
  const {
    word,
    setWord,
    guessedLetters,
    setGuessedLetters,
    attemptsLeft,
    setAttemptsLeft,
  } = useHangman();

  return (
    <div className="hangman-game">
      <h1>Wisielec</h1>
      <Word />
      <Keyboard/>
    </div>
  );
};

export default Hangman;
