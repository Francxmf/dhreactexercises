import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{
   constructor(props){
    super(props)
    this.state = {
        count : this.props.initialValue,
    }
    setInterval(()=> this.setState((state)=> ({count : state.count + this.props.incrementInterval})) , this.props.incrementAmount)
   }
   render(){
    return <CounterDisplay onscreenCounter = {this.state.count}/>
   }
}
