import { Component } from 'react';

class PalavraChaveFavorita extends Component {
  render() {
    const { palavraChaveFavorita, onChange } = this.props;
    return (
      <label>
        Escolha sua palavra chave favorita:
        <select
          name="palavraChaveFavorita"
          value={palavraChaveFavorita}
          onChange={onChange}
        >
          <option value="estado">Estado</option>
          <option value="evento">Evento</option>
          <option value="props">Props</option>
          <option value="hooks">Hooks</option>
        </select>
      </label>
    );
  }
}

export default PalavraChaveFavorita;