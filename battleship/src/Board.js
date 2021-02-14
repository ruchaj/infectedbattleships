import React, {useState} from 'react';
import Ship from './Ship';
import Cell from './Cell.js';
import EndButton from './EndButton.js'
import './Board.css';


const Board = (props) => {
    console.log(props.canEdit);

    // sets up the board by pushing cells into a 2d array and passing down props to the child component
    let board = [];
    for (let i = 0; i < props.nrows; i++){
        let row = [];
            for (let k = 0; k < props.ncols; k++){
                let coord = `${i}-${k}`;
                row.push(<Cell key={coord} 
                    user={props.user} 
                    canEdit={props.canEdit} 
                    isPlacing={props.isPlacing} 
                    flip={props.flip} 
                    machinePos={props.machinePos} 
                    />);
            }
        board.push(<tr key={i}>{row}</tr>);
    }
    
    const machineChoice = () => {
        let x = Math.floor(Math.random() * props.ncols);
        let y = Math.floor(Math.random() * props.nrows);
        return [x,y];
    }
    const [x,y] = machineChoice();
    console.log(x);
    console.log(y);

    console.log(board[x][y])

    // Check to see if a player has won
    const winCondition = () => {
                                                        // Player wins when all of his humans have covid
    }

    const bombAllShipsAroundMe = () => {
                                                        // When a cell is bombed, all humans around cells also get bombed (get covid)
    }

    // Check to see if the machine choice matches a cell where there is ship on it
    const machineMatch = () => {
        // if(board[x][y] == Cell.checkState()){
            
       // }
    }
    return(
        // Shows the board and its cells
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