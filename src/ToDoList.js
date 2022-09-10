import React from "react";

export class ToDoList extends React.Component {
  state = {
    items: ["todo1", "todo2", "todo3"],
    todo: "",
  };

  deleteLitemHandler = (event) => {
    const pressedBtn = event.target.name
    this.setState(
      (state) => {},
      () => this.setState((state) => state.items.splice(pressedBtn, 1))
    );
  }
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
  resetBtnHandler = ()=>{
    this.setState({
        items : []
    })
  }

  render() {
    return (
      <>
        <h2>To do list:</h2>
        <ul>
          {this.state.items.map((todo, index) => (
            <li key={index}>{todo} <button name={index} onClick={this.deleteLitemHandler}>remove</button></li>
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
        <button name="resetbtn" onClick={this.resetBtnHandler}>
          Reset
        </button>
      </>
    );
  }
}