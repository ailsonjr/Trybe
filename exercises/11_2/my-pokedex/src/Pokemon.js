import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props;
    return (
      <div>
        <ul>
          <li>{name}</li>
          <li>{type}</li>
          <li>{averageWeight.value}</li>
          <li>{averageWeight.measurementUnit}</li>
        </ul>
      </div>
    )
  }
}
export default Pokemon;