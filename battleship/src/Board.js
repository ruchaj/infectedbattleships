import React, {useRef, useState} from 'react';
import Ship from './Ship';
import Cell from './Cell.js';
import EndButton from './EndButton.js'
import './Board.css';


class Board extends React.Component {
    constructor(props){
       super(props); 
       this.createBoard = this.createBoard.bind(this);
       //this.checkSet = this.checkSet.bind(this);

       this.state = {
           pos: (this.props.machinePos !== undefined) ? Array.from(this.props.machinePos) : undefined,
           user: this.props.user
       }
    }  
    
    createBoard () {
    // sets up the board by pushing cells into a 2d array and passing down props to the child component
    let board = [];
    
    console.log(this.state.pos);
    
    for (let i = 0; i < this.props.nrows; i++){
        let row = [];
            for (let k = 0; k < this.props.ncols; k++){
                let coord = `${i}-${k}`;
                //this[`${this.state.user}-${coord}`] = React.createRef();
                
                if (this.state.pos !== undefined && this.state.pos.includes(`${i}${k}`)) {
                    row.push(<Cell key={coord} ref={ref => (this.test = ref)} user={this.state.user} canEdit={this.props.canEdit} isPlacing={this.props.isPlacing} flip={this.props.flip} machinePos={true} />);
                } else {
                    row.push(<Cell key={coord} ref={ref => (this[`${this.state.user}-${coord}`] = ref)} user={this.state.user} canEdit={this.props.canEdit} isPlacing={this.props.isPlacing} flip={this.props.flip} machinePos={false} />);
                }
                
                
                console.log(this[`${this.state.user}-${coord}`]);
                
            }
            
            //this[`1-0-0`].setShip();
        board.push(<tr key={i}>{row}</tr>);
        console.log("test"+this.test);
        console.log(this.props.children);
    }
    
    const machineChoice = () => {
        let x = Math.floor(Math.random() * this.props.ncols);
        let y = Math.floor(Math.random() * this.props.nrows);
        return [x,y];
    }
    const [x,y] = machineChoice();
    console.log(x);
    console.log(y);

    // if(board[x][y] == Cell.checkState()){
            
    // }

    return board;
}



    componentDidMount() {
        console.log("mount");
        console.log(this.refs);
    }

    // Check to see if a player has won
    winCondition = () => {
                                                        // Player wins when all of his humans have covid
    }

    bombAllShipsAroundMe = () => {
                                                        // When a cell is bombed, all humans around cells also get bombed (get covid)
    }

    // Check to see if the machine choice matches a cell where there is ship on it
    machineMatch = () => {
        // if(board[x][y] == Cell.checkState()){
            
       // }
    }
    render() {
    return(
        // Shows the board and its cells
        <div>
            <div className="Board-margins">
                <table className="Board">
                    <tbody>{this.createBoard()}</tbody>
                </table>
            </div>
        </div>
    );
    }
}

export default Board;