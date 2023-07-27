import React, { useState } from 'react';
import Board from './Board';

import useStyles from './styles';

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]); // an array of 9 nulls
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0; // first move to be “X” by default
    const currentSquares = history[currentMove]; // read the last squares array from the 'history'

    const layouts = useStyles();

    // update Game’s state
    function handlePlay(nextSquares) {
        const nextHistory = ([...history.slice(0, currentMove + 1), nextSquares]); // create a copy of history from the first move to current move
        setHistory(nextHistory); // update history
        setCurrentMove(nextHistory.length - 1); // the last array in history is the current move
    }

    // when click history buttons, it will jump to the specific move
    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    // iterate each array in history and create corresponding history buttons
    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button className={`${layouts.historyBtn} ${move === currentMove ? layouts.currentHistoryBtn : ''}`} onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className={layouts.game}>
            <div className='game-board'>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className={layouts.gameInfo}>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

export default Game;