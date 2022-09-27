import React from "react";
import "./Board.css";
import GameBoard from "./GameBoard";
const board = [
  "w", "b", "w", "b", "w", "b", "w", "b",
  "b", "w", "b", "w", "b", "w", "b", "w",
  "w", "b", "w", "b", "w", "b", "w", "b",
  "b", "w", "b", "w", "b", "w", "b", "w",
  "w", "b", "w", "b", "w", "b", "w", "b",
  "b", "w", "b", "w", "b", "w", "b", "w",
  "w", "b", "w", "b", "w", "b", "w", "b",
  "b", "w", "b", "w", "b", "w", "b", "w",
];
function Board() {
  let arr = board.map((s, k, j) => <div key={j + k} className={s}></div>);

  return <div className="board">{arr} <GameBoard /></div>;
}

export default Board;
