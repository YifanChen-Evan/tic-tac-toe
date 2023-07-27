// App.js is the "top component" that contains the logic of the Application
import React from 'react';
import Game from './Game';

import useStyles from './styles';

function App() {
    const layouts = useStyles();

    return (
        <div className='App'>
            <h1 className={layouts.title}>Tic-Tac-Toe</h1>
            <Game />
        </div>
    );
}

export default App;