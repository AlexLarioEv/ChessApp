import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure } from "./Figure";
import { ENameFigure } from "./Figure";
import whiteLogo from "../../assets/white-king.png";
import blackLogo from "../../assets/black-king.png";

 
export class King extends Figure{
    
    constructor(cell:Cell, color:Colors){
        super(color, cell)
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
        this.name = ENameFigure.BISHOP
    }
}