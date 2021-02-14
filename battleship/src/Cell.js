import React from 'react'
import './Cell.css'

class Cell extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.checkState = this.checkState.bind(this);
<<<<<<< HEAD
=======
        // this.getState = this.getState.bind(this);
        // this.hasShipHere = this.hasShipHere.bind(this);
        
>>>>>>> a234261080ab56a87c1804ec9db9fceb7acb76a2
        
        this.state = {
            didBombed: false,
            hasShip: false,
            user: props.user,
            canEdit: props.canEdit,
            isPlacing: props.isPlacing
        };
        //this.props.ref(this);
    }

<<<<<<< HEAD
=======
    componentDidMount() {
        this.props.onRef(this);
    }

    componentWillUnmount() {
        this.props.onRef(undefined);
    }

    setShips(){
        console.log("setShip");
    }

    attack() {
        this.setState({didBombed: true});
        this.props.flip();
    }

    // getState() {
    //     if(this.state.hasShip === true && !this.state.didBombed === true){
    //         return false;
    //     }
    //     else{
    //         return true;
    //     }
    // }

    // hasShipHere(){
    //     if(this.state.hasShip === true && !this.state.didBombed === true){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }

>>>>>>> a234261080ab56a87c1804ec9db9fceb7acb76a2
    onClick = () => {
        if (this.state.isPlacing) {
            this.setState({hasShip: true});
        } else if (this.state.canEdit && !this.state.didBombed) {
            if (!this.state.hasShip) {
                this.setState({didBombed: true})
            } else {
                this.setState({didBombed: true, hasShip: true});
                this.props.bombAllShipsAroundMe(this.state.id);
            }
            this.props.flip();
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props !== nextProps) {
            this.setState({canEdit: nextProps.canEdit, isPlacing: nextProps.isPlacing});
        }
        return true;
    }

<<<<<<< HEAD
    checkState = () => {
        if (this.state.user === 1) {
            if(this.state.didBombed && this.state.hasShip) {
                return "square-comp-person";
            } else if (this.state.didBombed){
                return "square-user-bombed";
            } else if (this.state.hasShip){
=======

    checkState(){
        if (this.state.user === 1) {                            // Left Board
            if(this.state.didBombed && this.state.hasShip) {    // Left Board and has a human and covid
                return "square-comp-person changeBg1";
            } else if (this.state.didBombed){                   // Left Board and has a covid molecule
                return "square-user-bombed fadeIn";
            } else if (this.state.hasShip){                     // Left Board and has a human
>>>>>>> a234261080ab56a87c1804ec9db9fceb7acb76a2
                return "square-user-person";
            } else {
                return "square";
            }
<<<<<<< HEAD
        } else if (this.state.user === 2) {
            if (this.state.didBombed && this.state.hasShip) {
                return "square-comp-person fadeIn";
            } else if (this.state.didBombed) {
                return "square-comp-bombed fadeIn";
            } else {
=======
        } else if (this.state.user === 2) {                     // Right Board
            if (this.state.didBombed && this.state.hasShip) {   // Right Board and has human and covid
                return "square-comp-person changeBg";
            } else if (this.state.didBombed) {                  // Right Board and has a covid molecule that fades
                return "square-comp-bombed fadeOut";
            } else {                                            // Right Board, nothing on this square
>>>>>>> a234261080ab56a87c1804ec9db9fceb7acb76a2
                return "square";
            }
        }
    }

    render() {
        return(
            <button className={this.checkState()} onClick={this.onClick}></button>
        );
    }
}

export default Cell;