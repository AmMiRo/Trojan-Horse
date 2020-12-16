import React from "react";
import { Route } from "react-router-dom";
import Start from "./components/Start";
import Game from "./components/Game";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/">
        <Start />
      </Route>
      <Route path="/game">
        <Game />
      </Route>
    </div>
  );
};

export default App;
