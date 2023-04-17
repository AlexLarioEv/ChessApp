import { v4 as uuidv4 } from "uuid"

import logo from "../../assets/black-king.png"
import { Cell } from "../Cell"
import { Colors } from "../Colors"

export enum ENameFigure{
    FIGURE= "FIGURE",
    KING=   "KING",
    QUEEN=  "QUEEN",
    ROOK=   "ROOK",
    BISHOP= "BISHOP",
    KNIGHT= "KNIGHT",
    PAWN=   "PAWN",
}

export class Figure {
    color: Colors
    logo: typeof logo | null
    cell: Cell
    name: ENameFigure
    id: string
    
    constructor(color: Colors, cell: Cell){
        this.color=color
        this.cell=cell
        this.cell.figure=this
        this.logo=null
        this.name=ENameFigure.FIGURE
        this.id = uuidv4()
    }

    canMove(target: Cell): boolean{
        return true
    }

    moveFigure(target: Cell){

    }
}