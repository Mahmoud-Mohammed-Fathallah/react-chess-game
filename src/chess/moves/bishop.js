export default function bishop(r1,c1,r2,c2,board) {
    // checking for same team
    if(board[r2][c2]!==null){
        if(board[r1][c1].name.charAt(0) === board[r2][c2].name.charAt(0)){
            window.alert("friendly fire!!");
            return false;
        }
    }
    let rpath = Math.abs(r2-r1);
    // checking for diagonal path
    if(rpath !== Math.abs(c2-c1) ){
        window.alert("not diagonal");
        return false;
    }
    // checking for empty path
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
    for (let i=1;i<rpath;i++) {
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
    return true;
}