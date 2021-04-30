import React from 'react';
import { Consumer } from '../context/Provider';

const renderOptions = (options) => (
  options.map((option) => (
    <option
      value={option}
      key={option}
    >
      {option}
    </option>
  ))
);

const Selector = () => (
  <Consumer>
    {({ selectedSubrredit, availableSubreddits, selectSubreddit }) => (
      <span>
        <h1>{`Selected: ${selectedSubrredit}`}</h1>
        <select
          onChange={(e) => selectSubreddit(e.target.value)}
          value={selectedSubrredit}
        >
          {renderOptions(availableSubreddits)}
        </select>
      </span>
    )}
  </Consumer>
);

export default Selector;
