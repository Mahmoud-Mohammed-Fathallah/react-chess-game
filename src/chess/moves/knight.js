export default function knight(r1,c1,r2,c2,board) {
    // checking for same team
    if(board[r2][c2]!==null){
        if(board[r1][c1].name.charAt(0) === board[r2][c2].name.charAt(0)){
            window.alert("friendly fire!!");
            return false;
        }
    }
    let rdiff = Math.abs(r2-r1);
    let cdiff = Math.abs(c2-c1);
    // checking for knight legal moves
    if((rdiff === 2 && cdiff === 1) || (rdiff === 1 && cdiff === 2)){
        return true;
    }
    window.alert("wrong move")
    return false;
}