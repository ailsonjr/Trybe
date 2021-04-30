import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <div>
        <h2>Renderizando Imagem</h2>
        <img src={this.props.source} alt={this.props.alternativeText} />
      <hr />
      </div>
      );
  }
}

export default Image;