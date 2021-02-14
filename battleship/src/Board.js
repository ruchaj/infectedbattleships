import React from 'react';
import Ship from './Ship';
import Cell from './Cell.js';
import './Board.css';


const Board = (props) => {
    let board = [];
        for (let i = 0; i < props.nrows; i++){
            let row = [];
                for (let k = 0; k < props.ncols; k++){
                    let coord = `${i}-${k}`;
                    row.push(<Cell key={coord} />);
                }
            board.push(<tr key={i}>{row}</tr>);
        }

    return(
        <div>
            <div className="Board-margins">
                <table className="Board">
                    <tbody>{board}</tbody>
                </table>
            </div>
        </div>
    );
   
}

export default Board;