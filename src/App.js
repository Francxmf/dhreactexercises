import React from "react";
import { Welcome } from "./Welcome";


export class App extends React.Component{
  render(){
      return (
        <div>
          <Welcome name={<strong>Poweruser</strong>} age={69} />
        </div>
      );
  }
} 

//tested: without the ageprop the line doesn't render with the default. 