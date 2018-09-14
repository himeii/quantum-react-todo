import React, { Component } from "react";

export default class Todo extends Component {
  updateStatus = () => {
    const { todo, switchStatus } = this.props;
    switchStatus(todo.id);
  };

  delete = () => {
    const { todo, deleteTodo } = this.props;
    deleteTodo(todo.id);
  };

  render() {
    const { todo } = this.props;
    return (
      <div className="ui cards">
        <div className="ui raised card">{todo.text}</div>
        <div className="ui raised card">
          <div className="ui checkbox">
            <input
              type="checkbox"
              checked={todo.status}
              onChange={this.updateStatus}
            />
            <label>{todo.status ? "Done" : "TODO"} </label>
          </div>
          <div className="ui button" onClick={this.delete}>
            x
          </div>
        </div>
      </div>
    );
  }
}
