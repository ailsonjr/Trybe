import React from 'react';

export default class MockInputs extends React.Component {

  render() {
    return (
      <div>
        {this.props.joke}
      </div>
    );
  }
}
