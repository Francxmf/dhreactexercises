import { useState } from "react";

 export function UseCounter(initialValue){
     const [counter, setCounter] = useState(initialValue);

     function IncrementHandler() {
       setCounter((num) => num + 1);
     }
     function DecrementHandler(){
         setCounter((num)=> num -1)
     }
     function ResetHandler(){
         setCounter(initialValue)
     }
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