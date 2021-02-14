import React from 'react'
import './Cell.css'

class Cell extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            didBombed: false,
            hasShip: false
        };
    }

    onClick = () => {
        this.setState({didBombed: !this.state.didBombed});
    }

    render() {
        return(
            <button className={(this.state.didBombed) ? "square-b" : "square"} onClick={this.onClick}></button>
        );
    }

<<<<<<< HEAD
    return (
        <td className={classes} onClick={handleClick}></td>
    )
=======
>>>>>>> ce28d8e26f499cf023c121d5897f881945a0b311
}

export default Cell;