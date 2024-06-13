import React from "react";
import { Link } from "react-router-dom";
import Word from "../word/Word";
import Keyboard from "../keyboard/Keyboard";
import { useHangmanContext } from "../../assets/context/hangmanContext";
const Hangman = () => {
  const { word, guessedLetters } = useHangmanContext();
  return (
    <div className="hangman-game">
      <h1>Wisielec</h1>
      <Word />
      <Keyboard />
    </div>
  );
};

export default Hangman;
