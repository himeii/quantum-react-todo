import React, { Component } from "react";
import "./App.css";
import InputField from "./components/InputField";
import Toolbar from "./components/Toolbar";
import TodoList from "./components/TodoList";
import { v4 } from "uuid";

//todo = { text: "Mow the lawn", id: "4328904lkl;as", status: false };
class App extends Component {
  state = {
    todos: [],
    newTodoText: ""
  };

  setTodoText = text => {
    this.setState({ newTodoText: text });
  };

  addTodo = () => {
    const { newTodoText } = this.state;
    const newTodo = {
      text: newTodoText,
      status: false,
      id: v4()
    };
    const todos = [...this.state.todos, newTodo];
    this.setState({ todos, newTodoText: "" });
  };

  switchStatus = id => {
    this.setState({
      todos: this.state.todos.map(
        todo => (todo.id === id ? { ...todo, status: !todo.status } : todo)
      )
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  };

  render() {
    const { newTodoText, todos } = this.state;
    return (
      <div className="App">
        <InputField
          newTodoText={newTodoText}
          setTodoText={this.setTodoText}
          addTodo={this.addTodo}
        />
        <Toolbar />
        <TodoList
          todos={todos}
          switchStatus={this.switchStatus}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
