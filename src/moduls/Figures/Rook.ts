import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure } from "./Figure";
import { ENameFigure } from "./Figure";
import whiteLogo from "../../assets/white-rook.png";
import blackLogo from "../../assets/black-rook.png";

 
export class Rook extends Figure{
    constructor(cell:Cell, color:Colors){
        super(color, cell)
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
        this.name = ENameFigure.BISHOP
    }
}