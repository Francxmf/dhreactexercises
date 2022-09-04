import React from "react";
import { Welcome } from "./Welcome";


export class App extends React.Component{
  render(){
      return (
        <div>
          <Welcome name={<strong>Poweruser</strong>} age={64} />
        </div>
      );
  }
} 

//tested inputs: 18(n), 19(y) - 64(y), 65(n);  works as expected. 

