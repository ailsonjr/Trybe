import React, { Component } from 'react';
import ReactRedux from './16_2-ReactRedux/conteudo/ReactRedux';
import Exercise from './16_2-ReactRedux/exercise/Exercise';
import LiveLecture from './16_2-ReactRedux/LiveLecture/LiveLecture';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Usando Redux no React</h1>
        <ReactRedux />
        <h2>Exercício</h2>
        <Exercise />
        <h2>Live Lecture</h2>
        <LiveLecture />
      </div>
    );
  }
}

export default App;
