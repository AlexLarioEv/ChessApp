import React, { Fragment } from "react";
import CellComponent from "../Cell";
import { Board } from "../../moduls/Board";

interface IBordProps{
    setBoard:(board: Board) => void
    board: Board
}

const BoardComponent: React.FC<IBordProps> = ({setBoard, board}) => {
    


    return (
        <div className="bord">

        {board.cells.map((row, index) => ( 
                <Fragment key={index}>
                    {row.map(cell=>  <CellComponent cell={cell} key={cell.id}/>)}
                </Fragment>)
            )
        }
        </div>
    )
}

export default BoardComponent