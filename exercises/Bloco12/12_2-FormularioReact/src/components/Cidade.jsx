import React, { Component } from 'react';

class Cidade extends Component {
  render() {
    const { city, onBlur, onChange } = this.props;
    return (
      <div className="container">
        Cidade:
        <input
          type="text"
          name="city"
          maxLength="28"
          required
          value={city}
          onBlur={onBlur}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Cidade;
