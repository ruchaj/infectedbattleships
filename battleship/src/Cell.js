import React from 'react'
import './Cell.css'

class Cell extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.checkState = this.checkState.bind(this);
        
        this.state = {
            didBombed: false,
            hasShip: false,
            user: props.user,
            canEdit: props.canEdit
        };
    }

<<<<<<< HEAD
    componentDidUpdate(){
        // this.setState({user:props.user});
        console.log(this.state.user);
    }
    

=======
>>>>>>> 11748300e90f916f75d0bd29407baaa9d8b85b90
    onClick = () => {
        if (this.state.canEdit) {
            this.setState({hasShip: !this.state.hasShip});
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props !== nextProps) {
            this.setState({canEdit: nextProps.canEdit});
        }
        return true;
    }

    checkState = () => {
        let str;
        if (this.state.user === 1) {
            if(this.state.didBombed) {
                str = "square-user-bombed";
            } else if (this.state.hasShip){
                str = "square-user-person";
            } else {
                str = "square";
            }
        } else if (this.state.user === 2) {
            if (this.state.didBombed) {
                str = "square-comp-person fadeIn";
            } else {
                str = "square";
            }
        }

        return str;
    }

    render() {
        return(
            <button className={this.checkState()} onClick={this.onClick}></button>
        );
    }
}

export default Cell;