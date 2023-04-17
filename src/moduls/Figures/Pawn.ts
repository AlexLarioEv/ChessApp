import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure } from "./Figure";
import { ENameFigure } from "./Figure";
import whiteLogo from "../../assets/white-pawn.png";
import blackLogo from "../../assets/black-pawn.png";

 
export class Pawn extends Figure{
    constructor(cell:Cell, color:Colors){
        super(color, cell)
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
        this.name = ENameFigure.BISHOP
    }
}