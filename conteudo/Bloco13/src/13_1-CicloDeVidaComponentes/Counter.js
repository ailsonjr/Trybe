import React from 'react';
import CounterDisplay from './CounterDisplay';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("construtor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.setState({
      counter: 10,
    });
  } // Após a página ser renderizada o counter é atualizado com o valor 10

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", this.state, prevState);
  }

  render() {
    console.log("render");
    return (
      <div>
        <h2>Componente Counter</h2>
        <h5>Componente pai do componente CounterDisplay que só atualiza o counter na tela quando o state do counter for divisível por 3 para mostrar a funcionalidade do método 'shouldComponentUpdate'</h5>
        Contador
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}>
          Soma
        </button>
        <CounterDisplay value={this.state.counter} />
        <hr />
      </div>
    );
  }
}

export default Counter;
