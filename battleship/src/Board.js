import React, {useRef, useState} from 'react';
import Ship from './Ship';
import Cell from './Cell.js';
import EndButton from './EndButton.js'
import './Board.css';


class Board extends React.Component {
    constructor(props){
       super(props); 

       this.state = {
           pos: (this.props.machinePos !== undefined) ? Array.from(this.props.machinePos) : undefined,
           user: this.props.user
       }

       this.arr = Array(this.props.nrows*this.props.ncols).fill(1);
       if (this.state.pos !== undefined) {
            console.log(this.state.pos);
       }
    }  
    
    componentDidMount() {
        this.props.onRef(this);
        console.log("this");
    }

    componentWillUnmount() {
        this.props.onRef(undefined);
    }

    // Check to see if a player has won
    winCondition = () => {
                                                        // Player wins when all of his humans have covid
    }

    bombAllShipsAroundMe = () => {
                                                        // When a cell is bombed, all humans around cells also get bombed (get covid)
    }

    attack(index) {
        this[`${this.state.user}-${index}`].attack();
    }

    // Check to see if the machine choice matches a cell where there is ship on it
    machineMatch = () => {
        console.log(this.test);

    }

    render() {
    return(
        // Shows the board and its cells
        <div>
            <div className="Board-margins">
                <table className="Board">
                    <tbody>{this.arr.map((item, index) => {
                            if (this.state.pos !== undefined && this.state.pos.includes(`${index}`)) {
                                return <Cell key={index} onRef={ref => (this[`${this.state.user}-${index}`] = ref)} user={this.state.user} canEdit={this.props.canEdit} isPlacing={this.props.isPlacing} flip={this.props.flip} machinePos={true} />;
                            } else {
                                return <Cell key={index} onRef={ref => (this[`${this.state.user}-${index}`] = ref)} user={this.state.user} canEdit={this.props.canEdit} isPlacing={this.props.isPlacing} flip={this.props.flip} machinePos={false} />;
                            }
                        }
                        )}</tbody>
                </table>
            </div>
        </div>
    );
    }
}

export default Board;