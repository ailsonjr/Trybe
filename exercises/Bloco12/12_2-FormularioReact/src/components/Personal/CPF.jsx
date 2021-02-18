import React, { Component } from 'react';

class CPF extends Component {
  render() {
    const { cpf, onChange } = this.props;
    return (
      <div className="container">
        CPF:
        <input
          type="text"
          name="cpf"
          maxLength="11"
          required
          value={cpf}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default CPF;
