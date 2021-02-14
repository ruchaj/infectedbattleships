import React, {useRef, useState} from 'react';
import Ship from './Ship';
import Cell from './Cell.js';
import EndButton from './EndButton.js'
import './Board.css';


class Board extends React.Component {
    constructor(props){
       super(props); 
       this.bombAllShipsAroundMe = this.bombAllShipsAroundMe.bind(this);
       this.flip = this.flip.bind(this);
       this.state = {
        pos: (this.props.machinePos !== undefined) ? Array.from(this.props.machinePos) : undefined,
        user: this.props.user,
        }

        this.arr = Array(this.props.nrows*this.props.ncols).fill(1);
        if (this.state.pos !== undefined) {
            console.log(this.state.pos);
        }
    }

   
    
    componentDidMount() {
        this.props.onRef(this);
        console.log("this");
        if(this.winCondition() === true){
            this.props.won();
        }
    }

    componentWillUnmount() {
        this.props.onRef(undefined);
    }

    // Check to see if a player has won
    winCondition = () => {
        let win = true;
        for (let i = 0; i < this.props.nrows*this.props.ncols; i++){
            if(this[`${this.state.user}-${i}`].getState() === false){ // returns true if there is a bombed ship, and false otherwise
                return false;
            }
        }
        return win;                                                // Player wins when all of his humans have covid
    }

    flip = (index) => {
        if(index >= 0 && index < 100){
            if(this[`${this.state.user}-${index}`].hasShipHere() === true){ // returns true if a ship not bombed is here, and false otherwise
                this[`${this.state.user}-${index}`].attack();
            }
            else if(this[`${this.state.user}-${index + 1}`].hasShipHere() === true){
                this.flip(index + 1);
            }
            else if(this[`${this.state.user}-${index - 1}`].hasShipHere() === true){
                this.flip(index - 1);
            }
            else if(this[`${this.state.user}-${index + 10}`].hasShipHere() === true){
                this.flip(index + 10);
            }
            else if(this[`${this.state.user}-${index - 10}`].hasShipHere() === true){
                this.flip(index - 10);
            }
            else{
                return;
            }
        }
    }

    bombAllShipsAroundMe = (index) => {
        this.flip(index);                                          // When a cell is bombed, all humans around cells also get bombed (get covid)
    }

    

    FindNumOfAllShips(){
        let count = 0;
        for (let i = 0; i < this.props.nrows*this.props.ncols; i++){
            if (this[`${this.state.user}-${i}`].checkState() === "square-comp-person fadeOut"){
                count += 1;
            }
        }
        return this.state.pos - count;                                                // When a cell is bombed, all humans around cells also get bombed (get covid)
    }

    // flipAroundMe(){

    // }

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
            {this.winCondition()}
            <div className="Board-margins">
                <table className="Board">
                <tbody>
                    {this.arr.map((item, index) => {
                            if (this.state.pos !== undefined && this.state.pos.includes(`${index}`)) {
                                return <Cell key={index} onRef={ref => (this[`${this.state.user}-${index}`] = ref)} id={index} 
                                user={this.state.user} 
                                canEdit={this.props.canEdit} 
                                isPlacing={this.props.isPlacing} 
                                flip={this.props.flip} 
                                machinePos={true} 
                                bombAroundMe={this.bombAllShipsAroundMe}
                                />;
                            } else {
                                return <Cell key={index} onRef={ref => (this[`${this.state.user}-${index}`] = ref)} id={index} 
                                user={this.state.user} 
                                canEdit={this.props.canEdit} 
                                isPlacing={this.props.isPlacing} 
                                flip={this.props.flip} 
                                machinePos={false} 
                                bombAroundMe={this.bombAllShipsAroundMe}
                                />;
                            }
                        }
                    )}
                </tbody>
                </table>
            </div>
        </div>
    );
    }
}

export default Board;