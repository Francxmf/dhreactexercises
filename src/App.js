import React from "react";
import { Welcome } from "./Welcome";


export class App extends React.Component{
  render(){
      return (
        <div>
          <Welcome name={"Mjr. Sandwich"} age={18} />
        </div>
      );
  }
} 



