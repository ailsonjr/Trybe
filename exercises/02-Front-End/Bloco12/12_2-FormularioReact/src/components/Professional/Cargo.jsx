import React, { Component } from 'react';

class Cargo extends Component {
  render() {
    const { role, onChange } = this.props;
    return (
      <div className="container">
        Cargo:
        <input
          type="text"
          name="role"
          maxLength="40"
          required
          value={role}
          onChange={onChange}
          onClick={() => {
            alert('Preencha com cuidado esta informação.');
          }}
        />
      </div>
    );
  }
}

export default Cargo;
