import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  render() {
    const { todos, switchStatus, deleteTodo } = this.props;
    return (
      <div>
        <h1>TodoList</h1>
        <div>
          {todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              switchStatus={switchStatus}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      </div>
    );
  }
}
