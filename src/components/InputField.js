import React, { Component } from "react";

export default class InputField extends Component {
  onChange = event => {
    const { setTodoText } = this.props;
    setTodoText(event.target.value);
  };

  render() {
    const { newTodoText, addTodo } = this.props;
    return (
      <div className="ui input">
        <input type="text" value={newTodoText} onChange={this.onChange} />
        <button className="ui button" onClick={addTodo}>
          Add todo
        </button>
      </div>
    );
  }
}
