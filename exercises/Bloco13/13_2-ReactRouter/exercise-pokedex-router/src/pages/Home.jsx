import React, { Component } from 'react';
import Pokedex from '../components/Pokedex';
import pokemons from '../data';


class Home extends Component {
  render() {
    return (
      <main className="App">
        <h1>Pokedex</h1>
        <Pokedex pokemons={pokemons} />
      </main>
    );
  }
}

export default Home;
