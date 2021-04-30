import React, { Component } from 'react';

class Nome extends Component {
  render() {
    const { name, onChange } = this.props;
    return (
      <div className="container">
        Nome:
        <input
          type="name"
          name="name"
          maxLength="40"
          required
          value={name}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Nome;
