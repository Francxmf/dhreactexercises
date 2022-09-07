import React from "react";

export class ClickTracker extends React.Component {
  state = {
    ev: "",
  };
  clickEventHandler = (event) => {
    this.setState((state) => {
      return {
        ev: event.target,
      };
    });
  };
  render() {
    return (
      <div>
        <h1> Press a button below!</h1>
        <button onClick={this.clickEventHandler}>
          1st button
        </button>
        <button onClick={this.clickEventHandler}>
          2nd button
        </button>
        <button onClick={this.clickEventHandler}>
          3rd button
        </button>
        <h1>Last pressed: {this.state.ev.innerText}</h1>
      </div>
    );
  }
}