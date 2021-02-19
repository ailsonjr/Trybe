import React from 'react';
import PropTypes from 'prop-types'

function Item(props) {
  const { content, selectTask, value } = props
  return (
    <div className="Item" onClick={selectTask} value={value}>
      {content}
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
}
