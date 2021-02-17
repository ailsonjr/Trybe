import React from 'react';
import Email from './components/Email';
import EstadoFavorito from './components/EstadoFavorito';
import Idade from './components/Idade';
import Nome from './components/Nome';
import PalavraChaveFavorita from './components/PalavraChaveFavorita';
import VaiComparecer from './components/VaiComparecer';
import './Form.css';


class Forms extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      estadoFavorito: '',
      email: '',
      nome: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { estadoFavorito, email, nome, idade, vaiComparecer, palavraChaveFavorita } = this.state;
    const { handleChange } = this;
    return (
      <main>
        <h1>Estados e React: Tecnologia incrível ou reagindo a regionalismos?</h1>
        <form className="form">
          <fieldset>
            <EstadoFavorito
              estadoFavorito={estadoFavorito}
              onChange={handleChange}
            />

            <Email
              email={email}
              onChange={handleChange}
            />

            <Nome
              nome={nome}
              onChange={handleChange}
            />

            <Idade
              idade={idade}
              onChange={handleChange}
              />

            <VaiComparecer
              vaiComparecer={vaiComparecer}
              onChange={handleChange}
            />

            <PalavraChaveFavorita
              palavraChaveFavorita={palavraChaveFavorita}
              onChange={handleChange}
            />

            <label>
              Adicione o arquivo
              <input type="file" name="arquivo" />
            </label>
          </fieldset>
        </form>

      </main>
    );
  }
}

export default Forms;
