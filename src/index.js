// index.js is the entry point for our server and contains the code of what to render and where to render
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';

// create a React 'root' container for displaying content
const root = ReactDOM.createRoot(document.getElementById('root'));

// display the React '<App />' component in 'root'
root.render(<App />);