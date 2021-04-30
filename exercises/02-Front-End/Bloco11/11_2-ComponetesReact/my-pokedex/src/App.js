import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <h1> Pokedex Trybe </h1>
      <Pokedex pokemons={pokemons}/>
    </div>
  )
}

export default App;
