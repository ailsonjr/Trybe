import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map(element => (
          <p>{element}</p>
        ))}
      </div>
    );
  }
}

const mapStateToPros = state => ({
  list: state.listReducer
});

List.propTypes = {
  list: PropTypes.shape.isRequired,
}

export default connect(mapStateToPros)(List);
