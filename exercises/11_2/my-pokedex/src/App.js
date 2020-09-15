import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <h1> Pokedex</h1><img src='../trybe.png' alt='Logo Trybe'></img>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;