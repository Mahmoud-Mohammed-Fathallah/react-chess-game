export default function whitepawn(r1, c1, r2, c2, board) {
  if (r1 - r2 === 1) {
    if (c2 - c1 === 0) {
      if (board[r2][c2] === null) {
        return true;
      }
    } else if (Math.abs(c2 - c1) === 1 && board[r2][c2]) {
      if (board[r2][c2].name.charAt(0) === "b") {
        return true;
      }
    }
  } else if (r1 - r2 === 2) {
    if (r1 === 6 && c2-c1 ===0 && board[r2][c2]===null && board[r2+1][c2]===null ) {
      return true;
    }
  }
  window.alert("wrong move!!");
  return false;
}
