/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {TodoList} from './TodoList'

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [{text:"Learn React", priority:5, dueDate: new Date() },
      {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
      {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }], text: '', priority:'10',dueDate:new Date(Date.now())};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            Agregue acá el siguiente: 
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
          <TodoList elements={this.state.items} />
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      priority: this.state.priority,
      dueDate: new Date()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: '',
      priority: 0,
      dueDate: new Date()
    }));
  }
}
