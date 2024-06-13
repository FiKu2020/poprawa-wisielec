import React from "react";
import PropTypes from "prop-types";

const Word = ({ word, guessedLetters }) => {
    const renderWord = () => {
      return word.split('').map((letter, index) =>
        guessedLetters.includes(letter) ? letter : '_'
      ).join(' ');
    };
    return (
      <p className="word-display">
        {renderWord()}
      </p>
    );
  };
  
  Word.propTypes = {
    word: PropTypes.string.isRequired,
    guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  };