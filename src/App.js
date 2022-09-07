import React from "react";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ClickTracker } from "./ClickTracker";


export class App extends React.Component{
  render(){
      return (
        <div>
          <Welcome name={"Mjr. Sandwich"} age={18} />
          <Counter initialValue={0} />
          <ClickTracker />
        </div>
      );
  }
} 



