import React from 'react'
import './Cell.css'

class Cell extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.checkState = this.checkState.bind(this);

        this.state = {
            didBombed: false,
            hasShip: this.props.machinePos,
            user: props.user,
            canEdit: props.canEdit,                             // user is guessing
            isPlacing: props.isPlacing                          // user is placing humans
        };
    }

    componentDidMount() {
        this.props.onRef(this);
    }

    componentWillUnmount() {
        this.props.onRef(undefined);
    }

    setShips() {
        console.log("setShip");
    }

    attack() {
        this.setState({didBombed: true});
        this.props.flip();
    }

    onClick = () => {
        if (this.state.isPlacing) {                                 // setting the position of the ships
            this.setState({hasShip: true});
        } else if (this.state.canEdit && !this.state.didBombed) {   // guess check for the state to change
            if (!this.state.hasShip) {                              // cell has no ship, sets bombed to true = has no ship and bombed
                this.setState({didBombed: true})                    
            } else {                                                // cell has a ship, sets bombed to true = has ship and bombed
                this.setState({didBombed: true, hasShip: true});
            }
            this.props.flip();                                      // flips the turns of the players
        }
    }

    shouldComponentUpdate(nextProps, nextState) {                   // updates the state from the next props
        if (this.props !== nextProps) {
            this.setState({canEdit: nextProps.canEdit, isPlacing: nextProps.isPlacing});
        }
        return true;
    }

    checkState = () => {
        if (this.state.user === 1) {                            // Left Board
            if(this.state.didBombed && this.state.hasShip) {    // Left Board and has a human and covid
                return "square-comp-person changeBg1";
            } else if (this.state.didBombed){                   // Left Board and has a covid molecule
                return "square-user-bombed fadeIn";
            } else if (this.state.hasShip){                     // Left Board and has a human
                return "square-user-person";
            } else {
                return "square";                                // Left Board, nothing on this square
            }
        } else if (this.state.user === 2) {                     // Right Board
            if (this.state.didBombed && this.state.hasShip) {   // Right Board and has human and covid
                return "square-comp-person changeBg";
            } else if (this.state.didBombed) {                  // Right Board and has a covid molecule that fades
                return "square-comp-bombed fadeOut";
            } else {                                            // Right Board, nothing on this square
                return "square";
            }
        }
    }

    render() {
        // Check State = Displays what is on the cell, on click will change the state of the cell if allowed
        return(
            <button className={this.checkState()} onClick={this.onClick}></button>
        );
    }
}

export default Cell;