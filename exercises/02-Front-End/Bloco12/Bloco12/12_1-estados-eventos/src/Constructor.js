import React from 'react';

/* No React, precisamos dizer explicitamente que queremos uma função da nossa classe
    através da sintaxe `this.minhaFuncao` para usá-la num evento */
// A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
// Sua lógica extra vai aqui! O parâmtro `props` é opcional, para você acessar as props diretamente no construtor

class Constructor extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
    console.log('Clicou!');
  }

  render() {
    return (
      <div>
        <h3>Componente Constructor</h3>
        <p>Evento usando constructor()</p>
        <button onClick={this.handleClick}>Meu botão</button>
        <hr />
      </div>
    );
  }
}

export default Constructor;

