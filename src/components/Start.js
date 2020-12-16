import React from "react";
import { NavLink } from "react-router-dom";
import CardBack from "../assets/blue_card_back.png";

const Start = () => {
  return (
    <div className="start-wrapper">
      <h1>Trojan Horse</h1>
      <img className="card-back" src={CardBack} alt="back of a playing card" />
      <NavLink to="/game" className="nav-link">
        <button>Start Game!</button>
      </NavLink>
    </div>
  );
};

export default Start;
