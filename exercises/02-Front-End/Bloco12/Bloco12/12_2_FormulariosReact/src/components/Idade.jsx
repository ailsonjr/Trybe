import React, { Component } from 'react';

class Idade extends Component {
  render() {
    const { idade, onChange } = this.props;
    return (
      <label>
        Idade
        <input
          name="idade"
          type="number"
          value={idade}
          onChange={onChange}
        />
      </label>
    );
  }
}

export default Idade;
