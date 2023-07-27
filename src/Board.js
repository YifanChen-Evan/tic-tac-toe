import React from 'react';
import Square from './Square';

import useStyles from './styles';

function Board({xIsNext, squares, onPlay}) {

    const layouts = useStyles();

    function handleClick(i) {
        // check if the square already has a 'X' or an 'O' and check if a player has won
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        // if the square has null and no winner
        const nextSquares = squares.slice(); // create a copy of the squares array, avoiding direct data mutation lets you keep previous versions of the data intact, and reuse them later
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    // display the winner
    const winner = calculateWinner(squares);
    let status;
    if (winner) { // a player has won
        status = 'Winner: ' + winner;
    } else {
        status = 'Next Player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <div className={layouts.statusDiv}>{status}</div>
            <div className={layouts.boardRow}>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} /> {/* When the square is clicked, the code after the => “arrow” will run */}
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className={layouts.boardRow}>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className={layouts.boardRow}>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );
}

// declare a winner
function calculateWinner(squares) {
    // 8 situations of success
    const lines = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [3, 4, 5],
        [2, 4, 6],
        [2, 5, 8],
        [6, 7, 8]
    ];

    // the values ('X' or 'O') at the 3 squares that can be a line are same, which means a winner ('X' or 'O') has emerged.
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]; //the destructuring assignment is used to assign the elements of lines[i] array to three variables a, b, and c (the indices of the squares that need to be checked)
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]; // 'X' or 'O'
        }
    }
    return null;
}

export default Board;