import React, { useEffect } from "react";
import { CounterDisplay } from "./CounterDisplay";
import { UseCounter } from "./UseCounter";


export function ClickCounter({initialValue}){
  const {counter, IncrementHandler, DecrementHandler, ResetHandler }=UseCounter(initialValue)
    
    function onCounterChange(){
      console.log(`Counter currently amounts to: ${counter}`)
    }
      useEffect(onCounterChange, [counter])

    
    return (
      <div>
        <h2>- Count freely! </h2>
        <CounterDisplay onscreenCounter= {counter} />
        <button onClick={IncrementHandler}> + </button>
        <button onClick={DecrementHandler}> - </button>
        <button onClick={ResetHandler}>Reset</button>
      </div>
    );
};