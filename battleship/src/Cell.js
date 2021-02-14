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