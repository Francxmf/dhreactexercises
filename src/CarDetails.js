import React, { useRef, useEffect, useState } from "react";

 export function CarDetails({
   initialData = { model: "Car model of your dreams", year: "Production year", color: "Color of interest" },
 }) {
   const inputRef = useRef();
   const [inputChange, setStatus] = useState(false);

   useEffect(() => {
     inputRef.current.elements.model.value = initialData.model;
     inputRef.current.elements.year.value = initialData.year;
     inputRef.current.elements.color.value = initialData.color;
   }, [initialData]);

   useEffect(() => {
     if (inputChange === true) {
       inputRef.current.elements.model.value = "";
       inputRef.current.elements.year.value = "";
       inputRef.current.elements.color.value = "";
     } else return;
   }, [inputChange]);

   function inputChangeHandler() {
     setStatus(true);
   }

   return (
     <form ref={inputRef} onChange={inputChangeHandler}>
       <h2>-Fill the form below to book your exotic vehicle!</h2>
       <input name="model" placeholder="Insert car model."/>
       <input name="year" placeholder="Insert year of production."/>
       <input name="color" placeholder="Insert desired color."/>
       <button type="button" onClick={() => console.log('test')}>Submit!</button>
     </form>
   );
 }