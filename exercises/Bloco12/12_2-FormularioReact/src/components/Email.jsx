import React, { Component } from 'react';

class Email extends Component {
  render() {
    const { email, onChange } = this.props;
    return (
      <div className="container">
        Email:
        <input
          type="email"
          name="email"
          maxLength="50"
          required
          value={email}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Email;
