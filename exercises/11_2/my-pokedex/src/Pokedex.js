import React, { Component } from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends Component {
  render () {
    return (
      <div>
        <h1>Pokedex Trybe</h1>
        {pokemons.map((pokemon, index) => {
          return <Pokemon 
            key={index}
            name={pokemon.name}
            type={pokemon.type}
            averageWeight={pokemon.averageWeight}
            image={pokemon.image}
          />
        })}
      </div>
    )
  }
}

export default Pokedex;