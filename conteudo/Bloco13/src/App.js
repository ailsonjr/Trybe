import './App.css';
import React from 'react';
import Counter from './13_1-CicloDeVidaComponentes/Counter';
import FreeCodeCamp from './13_1-CicloDeVidaComponentes/FreeCodeCamp';
import Lecture from './13_1-CicloDeVidaComponentes/Lecture';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showDateTime: true,
    }

    this.turnOffButton = this.turnOffButton.bind(this);
  }

  turnOffButton() {
    const { showDateTime } = this.state;

    this.setState({
      showDateTime: !showDateTime,
    });
  }

  render() {
    const { showDateTime } = this.state;
    return (
      <div className="App">
        <Counter />
        <FreeCodeCamp />
        <Lecture
          showDateTime={showDateTime}
          turnOffButton={this.turnOffButton} />
      </div>
    );
  }
}

export default App;
