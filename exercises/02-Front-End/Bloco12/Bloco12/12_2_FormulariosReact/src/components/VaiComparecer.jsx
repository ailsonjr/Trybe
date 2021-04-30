import React, { Component } from 'react';

class VaiComparecer extends Component {
  render() {
    const { vaiComparecer, onChange } = this.props;
    return (
      <label>
        Vai comparecer à conferência?
        <input
          name="vaiComparecer"
          type="checkbox"
          value={vaiComparecer}
          onChange={onChange}
        />
      </label>
    );
  }
}

export default VaiComparecer;
