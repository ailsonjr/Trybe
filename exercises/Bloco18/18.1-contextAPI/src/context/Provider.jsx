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
      signal: {
        color: 'red',
      },
    }

    this.movieCar = this.movieCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  movieCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  };

  changeSignal(signalColor) {
    this.setState({
      signal: {
        ...this.state.signal,
        color: signalColor,
      },
    });
  };

  render() {
    const context = {
      ...this.state,
      moveCar: this.movieCar,
      changeSignal: this.changeSignal,
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
