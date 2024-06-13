import { useState } from "react";
import { Route, Router, BrowserRouter, } from "react-router-dom";
import WelcomeScreen from "./components/welcomeScreen/welcomescreen";
import Hangman from "./components/hangedman/hangedman";
const App = () => {
  return (
    <BrowserRouter>
      <div className="main-app">
        <Route path="/" Component={WelcomeScreen} />
        <Route path="/game" component={Hangman} />
      </div>
    </BrowserRouter>
  );
};

export default App;
