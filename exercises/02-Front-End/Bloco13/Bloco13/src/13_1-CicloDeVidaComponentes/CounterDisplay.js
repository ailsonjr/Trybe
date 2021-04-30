import React from 'react';

class CounterDisplay extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    let npv = nextProps.value
    if (npv % 3 !== 0 || (npv >= 13 && npv <=15)) return false;
    return true;
  } // atualizado código para não atualizar com o valor entre 13 e 15

  render() {
    return <div> counter: {this.props.value}</div>;
  }
}

export default CounterDisplay;
