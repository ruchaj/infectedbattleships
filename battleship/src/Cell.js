import React from 'react'
import './Cell.css'

class Cell extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        
        this.state = {
            didBombed: false,
            hasShip: false,
            user: props.user
        };
    }

    onClick = () => {
        if (this.state.user === 2) {
            this.setState({didBombed: !this.state.didBombed});
        }
    }

    render() {
        return(
            <button className={(this.state.didBombed) ? "square-b" : "square"} onClick={this.onClick}></button>
        );
    }

}

export default Cell;