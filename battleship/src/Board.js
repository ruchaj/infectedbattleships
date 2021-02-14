import React, {useRef, useState} from 'react';
import Ship from './Ship';
import Cell from './Cell.js';
import EndButton from './EndButton.js'
import './Board.css';


class Board extends React.Component {
    constructor(props){
       super(props); 
       this.createBoard = this.createBoard.bind(this);
    }  
    createBoard () {

    let board = [];
    for (let i = 0; i < this.props.nrows; i++){
        let row = [];
            for (let k = 0; k < this.props.ncols; k++){
                let coord = `${i}-${k}`;
                
                
                row.push(<Cell key={coord} onRef={ref => (console.log(ref))} user={this.props.user} canEdit={this.props.canEdit} isPlacing={this.props.isPlacing} flip={this.props.flip} machinePos={this.props.machinePos} />);
                console.log(this[`child${coord}`]);
            }
            
            this[`child0-0`].setShip();
        board.push(<tr key={i}>{row}</tr>);
    }

    return board;
}
    // const machineChoice = () => {
    //     let x = Math.floor(Math.random() * props.ncols);
    //     let y = Math.floor(Math.random() * props.nrows);
    //     let row = board[x];
        
    //     console.log(row);
    //     console.log(row[y]);
    //     return [x,y];
    // }
    // let x = machineChoice()[0];
    // let y = machineChoice()[1];
    // console.log(x);
    // console.log(y);

    // console.log(board[x][y])

    // Check to see if the machine choice matches a cell where there is ship on it
    render() {    
    return(
        <div>
            <div className="Board-margins">
                <table className="Board">
                    <tbody>{this.createBoard()}</tbody>
                    {/* {console.log(machineChoice())} */}
                </table>
            </div>
        </div>
    );
    }
}

export default Board;