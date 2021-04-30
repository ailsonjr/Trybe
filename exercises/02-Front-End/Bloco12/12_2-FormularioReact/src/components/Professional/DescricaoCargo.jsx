import React, { Component } from 'react';

class DescricaoCargo extends Component {
  render() {
    const { roleDescription, onChange } = this.props;
    return (
      <div className="container">
        Descrição do cargo:
        <textarea
          name="roleDescription"
          maxLength="500"
          value={roleDescription}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default DescricaoCargo;
