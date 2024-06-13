import React from "react";
import PropTypes from "prop-types";
import { useHangmanContext } from "../../assets/context/hangmanContext";
const Word = () => {
  const { word, guessedLetters } = useHangmanContext();
  const renderWord = () => {
    return word
      .split("")
      .map((letter, index) => (guessedLetters.includes(letter) ? letter : "_"))
      .join(" ");
  };
  return <div className="word-display">{renderWord()}</div>;
};

Word.propTypes = {
  word: PropTypes.string.isRequired,
  guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Word;
