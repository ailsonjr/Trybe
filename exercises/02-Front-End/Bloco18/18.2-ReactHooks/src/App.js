// src/App.js

import React from 'react';
import './App.css';
import Cars from './components/Cars';
import TicTacToe from './components/TicTacToe/TicTacToe';
import TrafficSignal from './components/TrafficSignal';

function App() {
  return (
    <div className='App'>
      <Cars />
      <TrafficSignal />
      <TicTacToe />
    </div>
  );
}

export default App;
