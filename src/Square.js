import React from 'react';

import useStyles from './styles';

function Square({value, onSquareClick}) {
    const layouts = useStyles();

    return (
    <button className={layouts.square} onClick={onSquareClick}>
        {value}
    </button>
    );
}

export default Square;