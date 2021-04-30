import React from 'react';

/* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state`*/

/* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
    ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
    React*/

/*Para LER o estado, você pode usar `this.state.chaveDoMeuEstado`*/

class State extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
  }

  handleClick = () => {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    return (
      <div>
        <h3>Componente State</h3>
        <p>Componente usando o estado(guarda a composição naquele momento do componente)</p>
        <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
        <hr />
      </div>
    )
  }
}

export default State;