import React, { Component } from 'react';

class Endereco extends Component {
  render() {
    const { address, onChange } = this.props;
    return (
      <div className="container">
        Endereço:
        <input
          type="text"
          name="address"
          maxLength="200"
          required
          value={address}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Endereco;
