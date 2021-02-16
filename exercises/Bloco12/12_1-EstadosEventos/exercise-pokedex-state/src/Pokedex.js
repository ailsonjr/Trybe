import React from 'react';
import Pokemon from './Pokemon';
import NextButton from './NextButton';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(totalPokemons) {
    this.setState((prevState) => ({
      index: (prevState.index + 1) % totalPokemons.length
    }));
  }

  render() {
    const { index } = this.state;
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        <Pokemon pokemon={pokemons[index]} />
        <NextButton handleClick={() => this.handleClick(pokemons)}/>
      </div>
    );
  }
}

export default Pokedex;
