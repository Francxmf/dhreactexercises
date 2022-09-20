import { useMemo } from "react";

 export function FilteredList() {
   const list = [
     { name: "Franco", id: "01", age: 24 },
     { name: "Mario", id: "02", age: 115 },
     { name: "Slumboy", id: "03", age: 13 },
     { name: "John", id: "04", age: 36 },
     { name: "Rag", id: "05", age: 17 },
     { name: "Weirdbuba", id: "06", age: 95 },
     { name: "sloms", id: "08", age: 19 },
   ];
   const filter = useMemo(() => list.filter((person) => person.age >= 18), []);
   return (
    <div>
        <h2>- useMemo filtered list: </h2>
     <ul>
       {filter.map((item, index) => (
         <li key={index}>{item.name}</li>
       ))}
     </ul>
     </div>
   );
 }