import React, { Component } from 'react';
import ReactRedux from './16_2-ReactRedux/conteudo/ReactRedux';
import Exercise from './16_2-ReactRedux/exercise/Exercise';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Usando Redux no React</h1>
        <ReactRedux />
        <h2>Exercício</h2>
        <Exercise />
      </div>
    );
  }
}

export default App;
