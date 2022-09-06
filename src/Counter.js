import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
    state = {
      count: this.props.initialValue,
    };
    componentDidMount() {
      const stopCount = this.state.count;
      setInterval(
        () =>
          this.setState((state) => ({
            count:
              state.count + this.props.incrementInterval <= stopCount * 100
                ? state.count + this.props.incrementInterval
                : stopCount,
          })),
        this.props.incrementAmount
      );
    }
   render(){
    return <CounterDisplay onscreenCounter = {this.state.count}/>
   }
}
