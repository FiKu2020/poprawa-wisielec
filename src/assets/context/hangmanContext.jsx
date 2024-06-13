import React, { createContext, useRef, useState, useContext } from "react";

const HangmanContext = createContext();

export const HangmanProvider = ({ children }) => {
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [attemptsLeft, setAttemptsLeft] = useState(10);
  const wordDisplayRef = useRef(null);
}
  export const useHangmanContext = () => {
    return useContext(HangmanContext);
  };
