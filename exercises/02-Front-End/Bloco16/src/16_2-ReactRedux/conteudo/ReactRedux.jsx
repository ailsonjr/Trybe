import React, { Component } from 'react';
import { Provider } from 'react-redux';
import InputList from './InputList';
import List from './List';
import store from './store';

class ReactRedux extends Component {
  render() {
    return (
      <div>
        <Provider store={ store }>
          <InputList />
          <List />
        </Provider>
      </div>
    );
  }
}

export default ReactRedux;
