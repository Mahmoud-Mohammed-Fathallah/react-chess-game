export default function queen(r1, c1, r2, c2, board) {
  // checking for same team
  if (board[r2][c2] !== null) {
    if (board[r1][c1].name.charAt(0) === board[r2][c2].name.charAt(0)) {
      window.alert("friendly fire!!");
      return false;
    }
  }
  let rdiff = Math.abs(r2 - r1);
  let cdiff = Math.abs(c2 - c1);
  // checking for diagonal path
  if (rdiff !== cdiff) {
    // checking for strait path
    if (rdiff !== 0 && cdiff !== 0) {
      window.alert("neither diagonal nor strait");
      return false;
    } else {
      let path = rdiff;
      let min = Math.min(r1, r2);
      if (rdiff === 0) {
        path = cdiff;
        min = Math.min(c1, c2);
        for (let i = 1; i < path; i++) {
          let ind = min + i;
          if (board[r1][ind] !== null) {
            window.alert("somthing in he way!!");
            return false;
          }
        }
      } else {
        for (let i = 1; i < path; i++) {
          let ind = min + i;
          if (board[ind][c1] !== null) {
            window.alert("somthing in he way!!");
            return false;
          }
        }
      }
    }
  }
  // it is diagonal
  else {
    let minr = Math.min(r1,r2);
    let minc = Math.min(c1,c2);
    let basec = c2;
    let flag = false;
    if(minr === r1){
        basec = c1;
    }
    if(basec > minc){
        flag = true;
    }
    for (let i=1;i<rdiff;i++) {
       let r = minr + i;
       let c;
       if(flag){
        c = basec - i;
       }else{
        c = basec + i;
       }
       if(board[r][c] !== null){
        window.alert("something in the way!!");
        return false;
       }
    }
  }
  return true;
}
