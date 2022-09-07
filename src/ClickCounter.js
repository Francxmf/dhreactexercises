import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class ClickCounter extends React.Component {
  render() {
    return (
      <div>
        <CounterDisplay constDisplayCount = {this.props.onscreenCounter}/>
        <button onClick={this.props.updaterProp}>Add one!</button>
      </div>
    );
  }
}