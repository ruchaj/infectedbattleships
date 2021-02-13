import React, { useState, useEffect } from 'react'
import './Cell.css'

export const Cell = (props) => {
    const [isLit, setIsLit] = useState(false);

    const handleClick = (evt) => {
        setIsLit(!isLit);
    }

    let classes = "Cell" + (isLit ? " Cell-lit" : "");

    return (
        <td className={classes} onClick={handleClick} />
    )
}

export default Cell;