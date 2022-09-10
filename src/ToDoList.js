import React from "react";

export class ToDoList extends React.Component {
  state = {
    items: ["todo1", "todo2", "todo3"],
    todo: "",
  };
  inputFieldHandler = (event) => {
    this.setState({
      todo: event.target.value,
      focus : event.target
    });
  };
  buttonEventHandler = () => {
    this.setState((state) => {
      state.items.push(state.todo);
    },()=> this.setState((state2)=> {
        state2.todo = ""
        return state2.items
    }));
  };

  render() {
    return (
      <>
        <h2>To do list:</h2>
        <ul>
          {this.state.items.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <input
          name="todo"
          value={this.state.todo}
          onChange={this.inputFieldHandler}
        />
        <button name="addbtn" onClick={this.buttonEventHandler}>
          Add to list
        </button>
      </>
    );
  }
}