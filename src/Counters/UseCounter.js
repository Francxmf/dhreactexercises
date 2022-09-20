import { useState, useCallback } from "react";

 export function UseCounter(initialValue){
  const [counter, setCounter] = useState(initialValue);

  const IncrementHandler = useCallback(function IncrementHandler() {
    setCounter((c) => c + 1);
  }, [])
  const DecrementHandler = useCallback(function DecrementHandler(){
      setCounter((c)=> c -1)
  },[])
  const ResetHandler = useCallback(function ResetHandler(){
      setCounter(initialValue)
  }, [initialValue]);

  function onCounterChange() {
    console.log(`current result: ${counter}`);
  }
  
   return {
      counter,
      DecrementHandler,
      IncrementHandler,
      ResetHandler,
      onCounterChange,
    }
 }