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
            canEdit: props.canEdit,
            isPlacing: props.isPlacing
        };
        //this.props.ref(this);
    }

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

    checkState = () => {
        if (this.state.user === 1) {
            if(this.state.didBombed && this.state.hasShip) {
                return "square-comp-person";
            } else if (this.state.didBombed){
                return "square-user-bombed";
            } else if (this.state.hasShip){
                return "square-user-person";
            } else {
                return "square";
            }
        } else if (this.state.user === 2) {
            if (this.state.didBombed && this.state.hasShip) {
                return "square-comp-person fadeIn";
            } else if (this.state.didBombed) {
                return "square-comp-bombed fadeIn";
            } else {
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