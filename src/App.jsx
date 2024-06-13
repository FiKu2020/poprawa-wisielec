import { useState } from "react";
import { Route, Router, BrowserRouter, } from "react-router-dom";
import WelcomeScreen from "./components/welcomeScreen/welcomescreen";
const App = () => {
  return (
    <BrowserRouter>
      <div className="main-app">
        <Route path="/" Component={WelcomeScreen} />
      </div>
    </BrowserRouter>
  );
};

export default App;
