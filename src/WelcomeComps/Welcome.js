import React from "react";
import { Age } from "./Age"

export function Welcome({name = "Franko", age = "24"}){
    return <div>
      <p>Welcome, {name}</p>
      {<Age age ={age}/>}
    </div>
  };
