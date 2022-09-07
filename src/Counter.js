import React from "react";
import { ClickCounter } from "./ClickCounter";

export class Counter extends React.Component {
    state = {
      count: this.props.initialValue,
    };
    constructor(state){
      super(state)
      this.updateCounter = (event) => {
        return (this.setState((state) => (state.count += 1)));
      };
    }
    
   render(){
    return <ClickCounter onscreenCounter={this.state.count} updaterProp={this.updateCounter}/>
   }
}
