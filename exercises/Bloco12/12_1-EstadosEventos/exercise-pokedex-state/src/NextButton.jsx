import React from 'react';

export default class NextButton extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button
        onClick={handleClick}
      >
        Próximo Pokemon
      </button>
    );
  }
} 