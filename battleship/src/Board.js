import React, {useState} from 'react';
import Ship from './Ship';
import Cell from './Cell.js';
import './Board.css';


const Board = (props) => {
    const [isEditing, setIsEditing] = useState(true);

    let board = [];
    for (let i = 0; i < props.nrows; i++){
        let row = [];
            for (let k = 0; k < props.ncols; k++){
                let coord = `${i}-${k}`;
                row.push(<Cell key={coord} locked={props.placing} />);
            }
        board.push(<tr key={i}>{row}</tr>);
    }

    return(
        <div>
            {/* <Ship size="small"/>
            <Ship size="medium"/>
            <Ship size="large"/> */}
            
            <div className="Board-margins">
                <table className="Board">
                    <tbody>{board}</tbody>
                </table>
                <button onClick={props.setPlacing(false)}></button>
            </div>
        </div>
    );
   
}

export default Board;