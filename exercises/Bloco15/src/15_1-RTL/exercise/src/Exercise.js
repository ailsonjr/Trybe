import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';
import RemoveBtn from './RemoveBtn';

class Exercise extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      selected: false,
      pos: '',
    };

    this.addTodo = this.addTodo.bind(this);
    this.handleSelectTask = this.handleSelectTask.bind(this);
    this.handleRemoveTasks = this.handleRemoveTasks.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  handleSelectTask(event) {
    const taskPos = Object.values(event.target)[1].value;
    this.setState((state) => {
      state.selected = true;
    });
    this.setState((state) => {
      state.pos = taskPos;
    });
  }

  handleRemoveTasks(event) {
    const { listTodo, pos } = this.state;
    this.setState({
      selected: false,
      listTodo: [...listTodo.slice(0, pos), ...listTodo.slice(pos + 1, listTodo.length)],
    })
  }

  render() {
    const { listTodo,selected } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        <RemoveBtn
          selected={selected}
          onClick={(event) => this.handleRemoveTasks(event)} />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1}>
                  <Item
                    content={todo}
                    value={index}
                    selectTask={(event) => this.handleSelectTask(event)}
                  />
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}
export default Exercise;
