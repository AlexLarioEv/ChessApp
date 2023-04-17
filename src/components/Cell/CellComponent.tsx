import React from "react";

import { Board } from "../../moduls/Board";
import { Colors } from "../../moduls/Colors";
import { Figure } from "../../moduls/Figures/Figure";
import { Cell } from "../../moduls/Cell";

interface ICelProps {
    cell: Cell
}

const CellComponent: React.FC<ICelProps> = ({cell}) => {

    const {x, y, avalible, board, figure, color} = cell


    return ( 
        <div className={`cell ${color}`}>
            {cell.figure?.logo && <img className="figure"  src={cell.figure.logo} alt={cell.figure.name}></img>}
        </div>
    )
}

export default CellComponent