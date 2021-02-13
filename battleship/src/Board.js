import React, { useState } from 'react';
import Cell from './Cell.js';
import './Board.css';

export const Board = (props) => {
    // const [board, useBoard] = useState(null);
    



    let board = [];
    for (let i = 0; i < props.nrows; i++){
        let row = [];
        for (let k = 0; k < props.ncols; k++){
            row.push(<Cell />);
        }
        board.push(<tr>{row}</tr>);
    }

    return (
        <div className="Board-margins">
            <table className="Board">
                <tbody>{board}</tbody>
            </table>
        </div>
        

    )
}

export default Board;