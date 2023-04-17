import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Bishop } from "./Figures/Bishop";
import { King } from "./Figures/King";
import { Knight } from "./Figures/Knight";
import { Pawn } from "./Figures/Pawn";
import { Queen } from "./Figures/Queen";
import { Rook } from "./Figures/Rook";

export class Board {
    cells: Cell[][] = []

    public initCells() {
        for (let i=0; i<8; i++){
            const row: Cell[]=[]
            for(let j=0; j<8; j++){
                if( (i+j) % 2 !== 0 ){
                    row.push(new Cell(i, j, Colors.BLACK, null, this))
                } else {
                    row.push(new Cell(i, j, Colors.WHITE, null, this))
                }
            }
            this.cells.push(row)
        }
    }

    public getCell(x:number, y:number){
        return this.cells[x][y]
    }

    public addFigures(){
        this.addKing()
        this.addQueen()
        this.addRook()
        this.addBishop()
        this.addKnight()
        this.addPawn()
    }

    private addQueen(){
        new Queen (this.getCell(7,3), Colors.WHITE)
        new Queen (this.getCell(0,3), Colors.BLACK)
    }
    private addKing(){
        new King (this.getCell(7,4), Colors.WHITE)
        new King (this.getCell(0,4), Colors.BLACK)
    }
    private addBishop(){
        new Bishop (this.getCell(7,5), Colors.WHITE)
        new Bishop (this.getCell(7,2), Colors.WHITE)
        new Bishop (this.getCell(0,5), Colors.BLACK)
        new Bishop (this.getCell(0,2), Colors.BLACK)
    }
    private addKnight(){
        new Knight (this.getCell(7,6), Colors.WHITE)
        new Knight (this.getCell(7,1), Colors.WHITE)
        new Knight (this.getCell(0,6), Colors.BLACK)
        new Knight (this.getCell(0,1), Colors.BLACK)
    }
    private addRook(){
        new Rook (this.getCell(7,7), Colors.WHITE)
        new Rook (this.getCell(7,0), Colors.WHITE)
        new Rook (this.getCell(0,7), Colors.BLACK)
        new Rook (this.getCell(0,0), Colors.BLACK)
    }
    private addPawn(){
        for (let i=0; i<8; i++){
            new Pawn(this.getCell(6,i), Colors.WHITE)
            new Pawn(this.getCell(1,i), Colors.BLACK)
        }
    }

}