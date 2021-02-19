import React, { Component } from 'react';

class RemoveBtn extends Component {
  render() {
    const { onClick, selected } = this.props;
    return (
      <div>
        {
          selected
            ? <input
              type="button"
              value="Remover"
              data-testid="id-remove"
              onClick={(event) => onClick(event)}
            />
            : <input
              type="button"
              value="Remover"
              data-testid="id-remove"
              onClick={(event) => onClick(event)}
              disabled
            />
          
        }
      </div>
    );
  }
}

export default RemoveBtn;
