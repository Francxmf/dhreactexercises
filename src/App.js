import React from "react";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Counter } from "./Counter";
import { ClickTracker } from "./ClickTracker";



export class App extends React.Component{
  render(){
      return (
        <div>
          <InteractiveWelcome />
          <Counter initialValue={0} />
          <ClickTracker />      
        </div>
      );
  }
} 



