import React from 'react';

class Nome extends React.Component {
  render() {
    const { nome, onChange } = this.props;
    return (
      <label>
        Nome
        <input
          name="nome"
          type="text"
          value={nome}
          onChange={onChange}
        />
      </label>
    );
  }
}

export default Nome;
