import React from 'react';
import Pokemon from './Pokemon';
import NextButton from './NextButton';
import FilterButton from './FilterButton';

import './pokedex.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      types: 'all'
    }

    this.handleClick = this.handleClick.bind(this);
    this.pokemonsTypes = this.pokemonsTypes.bind(this);
    this.filterPokemons = this.filterPokemons.bind(this);
    this.filteredPokemons = this.filteredPokemons.bind(this);
  }

  filterPokemons(types) {
    this.setState({types, index: 0})
  }

  handleClick(totalPokemons) {
    this.setState((prevState) => ({
      index: (prevState.index + 1) % totalPokemons.length
    }));
  }

  filteredPokemons() {
    const { pokemons } = this.props;
    const { types } = this.state;

    return pokemons.filter(pokemon => {
      if (types === 'all') return true;
      return pokemon.type === types;
    });
  }

  pokemonsTypes() {
    const {pokemons} = this.props;
    return [... new Set(pokemons.reduce((types, { type }) => [...types, type], []))];
    // new Set é um constructor que cria uma nova variável e na qual não adiciona elementos repetidos, é feito um reduce para o new Set onde começa com uma array vazia e se faz um spread onde no acumulador é adicionado mais um type
  }

  render() {
    const { index } = this.state;
    const { pokemonsTypes, filterPokemons, filteredPokemons } = this;
    const pokemon = filteredPokemons()[index];
    return (
      <div className="pokedex">
        <Pokemon pokemon={pokemon} />
        <div className='pokedex-buttons-panel'>
          <FilterButton
            onClick={() => filterPokemons('all')}
            className={'filter-button'}
          >
            All
          </FilterButton>
          {pokemonsTypes().map(type => (
            <FilterButton
              key={type}
              className={'filter-button'}
              onClick={() => filterPokemons(type)}
            >
              {type}
            </FilterButton>
          ))}
        </div>
        <NextButton
          handleClick={() => this.handleClick(filteredPokemons())}
          disabled={filteredPokemons().length <= 1}
        />
      </div>
    );
  }
}

export default Pokedex;
