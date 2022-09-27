export default function rook(r1,c1,r2,c2,board) {
    // checking for same team
    if(board[r2][c2]!==null){
        if(board[r1][c1].name.charAt(0) === board[r2][c2].name.charAt(0)){
            window.alert("friendly fire!!");
            return false;
        }
    }
    let rdiff = Math.abs(r2-r1);
    let cdiff = Math.abs(c2-c1);
    // checking for strait path
    if(rdiff!==0 && cdiff!==0){
        window.alert("not strait");
        return false;
    }
    let path = rdiff;
    let min = Math.min(r1,r2);
    if(rdiff===0){
        path = cdiff;
        min = Math.min(c1,c2);
        for(let i=1;i<path;i++){
            let ind = min + i;
            if(board[r1][ind] !== null){
                window.alert("somthing in he way!!");
                return false;
            }
        }
    }else{
        for(let i=1;i<path;i++){
            let ind = min + i;
            if(board[ind][c1] !== null){
                console.log("somthing in he way!!");
                return false;
            }
        }
    }
    return true;
}