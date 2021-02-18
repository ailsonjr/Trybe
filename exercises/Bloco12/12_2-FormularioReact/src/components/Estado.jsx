import React, { Component } from 'react';

class Estado extends Component {
  render() {
    const { countryState, states, onChange } = this.props;
    return (
      <div className="container">
        Estado:
        <select
          name="countryState"
          required
          value={countryState}
          onChange={onChange}
        >
          {states.map((value, key) =>
            <option key={key}>{value}</option>
          )
          }
        </select>
      </div>
    );
  }
}

export default Estado;
