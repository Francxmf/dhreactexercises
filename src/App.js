import React from "react";
import { Welcome } from "./Welcome";


export class App extends React.Component{
  render(){
      return (
        <div>
          <Welcome name={"John"} age={64} />
        </div>
      );
  }
} 

// tested by changing the name prop at line -9 : anything that's not the string "John" will not print the age line

