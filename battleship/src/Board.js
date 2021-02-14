import React, {useState} from 'react';
import Ship from './Ship';
import Cell from './Cell.js';
import EndButton from './EndButton.js'
import './Board.css';


const Board = (props) => {
    console.log(props.canEdit);

    let board = [];
<<<<<<< HEAD
    for (let i = 0; i < props.nrows; i++){
        let row = [];
            for (let k = 0; k < props.ncols; k++){
                let coord = `${i}-${k}`;
                row.push(<Cell key={coord} user={props.user} canEdit={props.canEdit}/>);
            }
        board.push(<tr key={i}>{row}</tr>);
    }

    const machineChoice = () => {
        let x = Math.floor(Math.random() * props.ncols);
        let y = Math.floor(Math.random() * props.nrows);
        return [x,y];
    }
=======
        for (let i = 0; i < props.nrows; i++){
            let row = [];
                for (let k = 0; k < props.ncols; k++){
                    let coord = `${i}-${k}`;
                    row.push(<Cell key={coord} user={props.user} canEdit={props.canEdit} isPlacing={props.isPlacing} flip={props.flip}/>);
                }
            board.push(<tr key={i}>{row}</tr>);
        }
>>>>>>> 4bdf238e51ed557be6609695b570bc7ab8d6e102

    return(
        <div>
            <div className="Board-margins">
                <table className="Board">
                    <tbody>{board}</tbody>
                    {console.log(machineChoice())}
                </table>
            </div>
        </div>
    );
}

export default Board;