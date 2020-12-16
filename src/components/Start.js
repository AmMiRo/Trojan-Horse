import React from "react";
import { NavLink } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <h1>Trojan Horse</h1>
      <div>
        <NavLink to="/game">
          <button>Start Game!</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Start;
