import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addAssignment from './actions';

class InputList extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      textValue: ''
    }
  }
  
  render() {
    const { textValue } = this.state;
    const { add } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          onChange={event => this.setState({ textValue: event.target.value })}
        />
        <button onClick={() => add(textValue)}>
          Adicionar tarefa
        </button>
     </div> 
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: e => dispatch(addAssignment(e))
});

InputList.propTypes = {
  add: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(InputList);
