export default class piece {
    constructor(row,col,name){
        this.row = row;
        this.col = col;
        this.name = name;
        this.image = `../../../images/chess pieces/${name}.png`
    }
    getRow() {
        return this.row;
    }
    setRow(newVal) {
        this.row = newVal;
    }
    getCol() {
        return this.row;
    }
    setCol(newVal) {
        this.col = newVal;
    }
    getImage(){
        return this.image;
    }
    getName(){
        return this.Name;
    }
    charAt(num){
        return "p";
    }
}