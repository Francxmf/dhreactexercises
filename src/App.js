import React from "react";
import { Welcome } from "./Welcome";


export class App extends React.Component{
  render(){
      return (
        <div>
          <Welcome name={<strong>Poweruser</strong>} age={18} />
        </div>
      );
  }
} 

//tested with age18 (doesn't render) and 19 (does render)