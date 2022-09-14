import React, { useState, useEffect } from "react";
import { CounterDisplay } from "./CounterDisplay";


export function ClickCounter({initialValue}){
    const [counter, setCounter ] = useState(initialValue)
    
    function IncrementHandler(){
      setCounter(num => num + 1)
    }

    function onCounterChange(){
      console.log(`Counter currently amounts to: ${counter}`)
    }
      useEffect(onCounterChange, [counter])

    
    return (
      <div>
        <h2>- Add one and see the counter rise! </h2>
        <button onClick={IncrementHandler}>Add one</button>
        <CounterDisplay onscreenCounter= {counter} />
      </div>
    ) 
};