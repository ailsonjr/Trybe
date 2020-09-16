import React, { Component } from 'react';

class Exercises extends Component {
  render () {
    return <div>
      <h3><span className='exercise'>Exercise 1:</span> Print 'Hello JSX!' with an h1 element:</h3>
      const JSX = <h1>Hello JSX!</h1>;

      <h3><span className='exercise'>Exercise 2:</span> Define a new constant JSX that renders a div which contains the following elements in order:</h3>
      <h3>An h1, a p, and an unordered list that contains three li items.</h3>
      const JSX = (
        <div>
          <h1>Make a list with what you like to do.</h1>
          <p>To do list:</p>
          <ul>
            <li>To study;</li>
            <li>Meditate;</li>
            <li>Play game.</li>
          </ul>
        </div>
      )

        <h3><span className='exercise'>Exercise 3:</span>To put comments inside JSX, you use the syntax {`{/* */}`} to wrap around the comment text.</h3>
        const JSX = (
  <div>
    {/*Comment using this sintaxe*/}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);

    </div>
  }
}

export default Exercises;