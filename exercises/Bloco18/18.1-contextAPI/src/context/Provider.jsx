import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MyContext from './MyContext';

class Provider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }

    this.movieCar = this.movieCar.bind(this)
  }

  movieCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  };

  render() {
    const context = {
      ...this.state,
      moveCar: this.movieCar,
    };

      const { children } = this.props;
    return (
      <MyContext.Provider value={context}>
        {children}
      </MyContext.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
