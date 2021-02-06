import Conteudo1 from './15_1-RTL/Conteudo1';
// import MockInputs from './15_2-Mocks-Inputs/MockInputs';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: '',
    }
  }

  async componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    // Usando .then
    // fetch(API_URL, { headers: { Accept: 'application/json' } })
    //   .then((response) => response.json())
    //   .then((data) => this.setState({ joke: data.joke }));

    // Usando async
    const response = await fetch(API_URL, { headers: { Accept: 'application/json' } });
    const data = await response.json();

    this.setState({ joke: data.joke });
  }

  // render() {
  //   return (
  //     <div className="App">
  //       {this.state.joke}
  //     </div>
  //   );
  // }
  render() {
    // const { joke } = this.state;
    return (
      <div className="App">
        <Conteudo1 />
        {/* <MockInputs joke={joke} /> */}
        {this.state.joke}
      </div>
    );
  }
}

export default App;
