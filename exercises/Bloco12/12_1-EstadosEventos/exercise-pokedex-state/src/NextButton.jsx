import React from 'react';

export default class NextButton extends React.Component {
  render() {
    const { handleClick, disabled } = this.props;
    return (
      <button
        onClick={handleClick}
        disabled={disabled}
      >
        Próximo Pokemon
      </button>
    );
  }
} 