import React from "react";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Counter } from "./Counter";
import { ClickTracker } from "./ClickTracker";
import { UncontrolledLogin } from "./UncontrolledLogin";


export class App extends React.Component{
  onLogin(state){
    console.log(state)
  }
  render(){
      return (
        <div>
          <InteractiveWelcome />
          <Counter initialValue={0} />
          <ClickTracker />    
          <UncontrolledLogin passFunction = {this.onLogin}/> 
        </div>
      );
  }
} 



