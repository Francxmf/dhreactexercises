import React from "react";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";


export class App extends React.Component{
  render(){
      return (
        <div>
          <Welcome name={"Mjr. Sandwich"} age={18} />
          <Counter initialValue = {0} incrementInterval = {10} incrementAmount = {1000} />
        </div>
      );
  }
} 



