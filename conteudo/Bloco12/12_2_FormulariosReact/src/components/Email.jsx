import React from 'react';

class Email extends React.Component {
  render() {
    const { email, onChange } = this.props;
    return (
      <label>
        Email
        <input
          name="email"
          type="email"
          value={email}
          onChange={ onChange}
        />
      </label>
    );
  }
}

export default Email;
