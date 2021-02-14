import React from 'react'
import './Cell.css'

function Cell(props) {

    const onClick = () => {
        if (isPlacing) {
            setState({hasShip: true});
        } else if (canEdit && !didBombed) {
            if (!hasShip) {
                setState({didBombed: true})
            } else {
                setState({didBombed: true, hasShip: true});
            }
            props.flip();
        }
    };

    const shouldComponentUpdate = (nextProps, nextState) => {
        if (props !== nextProps) {
            setState({canEdit: nextProps.canEdit, isPlacing: nextProps.isPlacing});
        }
        return true;
    };

    const checkState = () => {
        if (user === 1) {
            if(didBombed && hasShip) {
                return "square-comp-person";
            } else if (didBombed){
                return "square-user-bombed";
            } else if (hasShip){
                return "square-user-person";
            } else {
                return "square";
            }
        } else if (user === 2) {
            if (didBombed && hasShip) {
                return "square-comp-person fadeIn";
            } else if (didBombed) {
                return "square-comp-bombed fadeIn";
            } else {
                return "square";
            }
        }
    }

        return(
            <button className={this.checkState()} onClick={this.onClick}></button>
        );
}

export default Cell;