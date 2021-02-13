import React from 'react';
import Ship from './Ship';

const Board = (props) => {

    return(
        <div>
        <Ship size="small"/>
        <Ship size="medium"/>
        <Ship size="large"/>

        </div>
    );


}

export default Board;