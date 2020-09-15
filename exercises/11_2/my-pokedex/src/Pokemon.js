import React, { Component } from 'react';
import './Pokemon.css';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props;
    return (
      <div className='pokemon-div'>
        <h3>{name}</h3>
        <h4>{type}</h4>
        <h4>{averageWeight.value}{averageWeight.measurementUnit}</h4>
        <img src={image} alt='pokemon-img'></img>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.number
}
export default Pokemon;
