import React, {useState, useEffect} from "react";

export function Counter(){
  const [counter, setCounter] = useState(0)
  function setAll(){
    console.log("Counter mounts")
    setInterval(() => setCounter(c => c+1), 1000)
    return () => {
      console.log(`Getting unmounts`)
    }
  }

  useEffect(setAll, [])
  return <h1>Counter: {counter} </h1>
}