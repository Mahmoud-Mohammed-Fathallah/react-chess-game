import React from "react";
import Piece from "../../chess/pieces";
import validate from "../../chess/controler/moveValidator";
import Tile from "./Tile";
// the pieces
const bp1 = new Piece(2, 1, "bp");
const bp2 = new Piece(2, 2, "bp");
const bp3 = new Piece(2, 3, "bp");
const bp4 = new Piece(2, 4, "bp");
const bp5 = new Piece(2, 5, "bp");
const bp6 = new Piece(2, 6, "bp");
const bp7 = new Piece(2, 7, "bp");
const bp8 = new Piece(2, 8, "bp");
const wp1 = new Piece(7, 1, "wp");
const wp2 = new Piece(7, 2, "wp");
const wp3 = new Piece(7, 3, "wp");
const wp4 = new Piece(7, 4, "wp");
const wp5 = new Piece(7, 5, "wp");
const wp6 = new Piece(7, 6, "wp");
const wp7 = new Piece(7, 7, "wp");
const wp8 = new Piece(7, 8, "wp");
const br1 = new Piece(1, 1, "br");
const br2 = new Piece(1, 8, "br");
const wr1 = new Piece(8, 1, "wr");
const wr2 = new Piece(8, 8, "wr");
const bn1 = new Piece(1, 2, "bn");
const bn2 = new Piece(1, 7, "bn");
const wn1 = new Piece(8, 2, "wn");
const wn2 = new Piece(8, 7, "wn");
const bb1 = new Piece(1, 3, "bb");
const bb2 = new Piece(1, 6, "bb");
const wb1 = new Piece(8, 3, "wb");
const wb2 = new Piece(8, 6, "wb");
const bq = new Piece(1, 4, "bq");
const wq = new Piece(8, 4, "wq");
const bk = new Piece(1, 5, "bk");
const wk = new Piece(8, 5, "wk");

// initial board of the game
const initial = [
  [br1, bn1, bb1, bq, bk, bb2, bn2, br2],
  [bp1, bp2, bp3, bp4, bp5, bp6, bp7, bp8],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [wp1, wp2, wp3, wp4, wp5, wp6, wp7, wp8],
  [wr1, wn1, wb1, wq, wk, wb2, wn2, wr2],
];
// 2d array to store the coordinates of empty squares.
const coordinates = [
  ["11", "12", "13", "14", "15", "16", "17", "18"],
  ["21", "22", "23", "24", "25", "26", "27", "28"],
  ["31", "32", "33", "34", "35", "36", "37", "38"],
  ["41", "42", "43", "44", "45", "46", "47", "48"],
  ["51", "52", "53", "54", "55", "56", "57", "58"],
  ["61", "62", "63", "64", "65", "66", "67", "68"],
  ["71", "72", "73", "74", "75", "76", "77", "78"],
  ["81", "82", "83", "84", "85", "86", "87", "88"],
];
let turn = "white";
function GameBoard() {
  let [board, setBoard] = React.useState(initial);
  let chosenPiece = null;
  let x1 = 0,
    y1 = 0;
  let choose = (e, piece) => {
    if (chosenPiece !== null) {
      let x = 0,
        y = 0;
      if (piece.charAt(0) !== "p") {
        x = Number(piece.charAt(0)) - 1;
        y = Number(piece.charAt(1)) - 1;
      } else {
        x = piece.row - 1;
        y = piece.col - 1;
      }
      if (validate(x1, y1, x, y, board)) {
        chosenPiece.setRow(x + 1);
        chosenPiece.setCol(y + 1);
        let p = new Piece(chosenPiece.row, chosenPiece.col, chosenPiece.name);
        setBoard((b) => {
          let New = [...b];
          New[x1][y1] = null;
          New[x][y] = p;
          return New;
        });
        turn = turn === "white" ? "black" : "white";
        new Audio("../../../sounds/chessmove.wav").play();
      }
      chosenPiece = null;
    } else {
      if (piece.charAt(0) !== "p") {
        return;
      } else {
        if (turn === "white") {
          if (board[piece.row - 1][piece.col - 1].name.charAt(0) === "w") {
            x1 = piece.row - 1;
            y1 = piece.col - 1;
            chosenPiece = new Piece(piece.row, piece.col, piece.name);
          }else{window.alert("it is white's turn!");return;}
        }else {
          if (board[piece.row - 1][piece.col - 1].name.charAt(0) === "b") {
            x1 = piece.row - 1;
            y1 = piece.col - 1;
            chosenPiece = new Piece(piece.row, piece.col, piece.name);
          }else{window.alert("it is black's turn!");return;}
        }
      }
    }
  };
  let arr = [].concat(...board).map((s, i) => {
    let p = s;
    if (s === null) {
      p = [].concat(...coordinates)[i];
    }
    return (
      <Tile key={i} func={(e) => choose(e, p)} s={s}/>
    );
  });
  return <div className="game-board">{arr}</div>;
}

export default GameBoard;
