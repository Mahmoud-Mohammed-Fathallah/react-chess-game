import blackpawn from "../moves/blackpawn";
import whitepawn from "../moves/whitepawn";
import rook from '../moves/rook';
import king from '../moves/king';
import queen from '../moves/queen';
import knight from '../moves/knight';
import bishop from '../moves/bishop';
export default function validate(r1,c1,r2,c2,board){
    if(board[r1][c1].name === "bp"){
        return blackpawn(r1,c1,r2,c2,board);
    }else if(board[r1][c1].name === "wp"){
        return whitepawn(r1,c1,r2,c2,board);
    }else if(board[r1][c1].name.charAt(1) === "k"){
        return king(r1,c1,r2,c2,board);
    }else if(board[r1][c1].name.charAt(1) === "q"){
        return queen(r1,c1,r2,c2,board);
    }else if(board[r1][c1].name.charAt(1) === "r"){
        return rook(r1,c1,r2,c2,board);
    }else if(board[r1][c1].name.charAt(1) === "n"){
        return knight(r1,c1,r2,c2,board);
    }else if(board[r1][c1].name.charAt(1) === "b"){
        return bishop(r1,c1,r2,c2,board);
    }
}