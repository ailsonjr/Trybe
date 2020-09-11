import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props;
    return (
      <div>
        <h3>{name}</h3>
        <h4>{type}</h4>
        <h4>{averageWeight.value}{averageWeight.measurementUnit}</h4>
        <img src={image}></img>
      </div>
    )
  }
}
export default Pokemon;