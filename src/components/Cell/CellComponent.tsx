import React from "react";

import { Board } from "../../moduls/Board";
import { Colors } from "../../moduls/Colors";
import { Figure } from "../../moduls/Figures/Figure";

interface ICellProps{
    x: number
    y: number
    color: Colors
    figure: Figure|null
    bord: Board
    avalible:boolean

}

const CellComponent: React.FC<ICellProps> = ({color}) => {
    


    return <div className={`cell ${color}`}></div>
}

export default CellComponent