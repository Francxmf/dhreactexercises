import React from "react";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Counter } from "./Counter";
import { ClickTracker } from "./ClickTracker";
import { Login } from "./Login";


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
          <Login passFunction= {this.onLogin}/>
        </div>
      );
  }
} 



