import { Board } from "./Board";
import { Colors } from "./Colors"
import { Figure } from "./Figures/Figure";
import { v4 as uuidv4 } from 'uuid';

export class Cell {

    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null
    board: Board
    avalible:boolean
    id: string

    constructor(x: number, y: number, color: Colors, figure: Figure | null, board: Board){
        this.x=x
        this.y=y
        this.color = color
        this.figure=figure
        this.board=board
        this.avalible = false
        this.id= uuidv4()
    }
}

