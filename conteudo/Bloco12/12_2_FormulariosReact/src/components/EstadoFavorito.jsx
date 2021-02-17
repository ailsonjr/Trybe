import React from 'react'

class EstadoFavorito extends React.Component {
  render() {
    const { estadoFavorito, onChange } = this.props;
    return (
      <label>
      Diga qual é seu Estado favorito! Do Brasil ou do React, você quem sabe?
    <textarea
        name="estadoFavorito"
        value={estadoFavorito}
        onChange={onChange}
      />
    </label>
    )
  }
}

export default EstadoFavorito;