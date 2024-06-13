import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import listOfLetters from "../../assets/letters.json";

const Keyboard = () => {
  const [letters, setLetters] = useState([]);
};

useEffect(() => {
  const getLettersFromFile = async () => {
    fetch(listOfLetters)
      .then(data => {setLetters(data.letters)})
      .catch(error)
    // const response = await fetch(listOfLetters)
    // const data = await response.json()
    // setLetters(data.letters);

  };
});
return Keyboard;
