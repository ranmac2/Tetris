import react, { Component } from "react";
import Menu from "../components/Menu";

const start = () => {
  console.log("start");
};

const Game = ({ rows, columns }) => {
  return (
    <div className="game">
      <Menu onClick={start} />
    </div>
  );
};

export default Game;
