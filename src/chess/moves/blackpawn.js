export default function blackpawnvalid(r1, c1, r2, c2, board) {
  if (r2 - r1 === 1) {
    if (c2 - c1 === 0) {
      if (board[r2][c2] === null) {
        return true;
      }
    } else if (Math.abs(c2 - c1) === 1 && board[r2][c2]) {
      if (board[r2][c2].name.charAt(0) === "w") {
        return true;
      }
    }
  } else if (r2 - r1 === 2) {
    if (r1 === 1 && c2-c1 ===0 && board[r2][c2]===null && board[r2-1][c2]===null ) {
      return true;
    }
  }
  window.alert("wrong move!")
  return false;
}
