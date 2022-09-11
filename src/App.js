import React from "react";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { ClickTracker } from "./ClickTracker";
import { Login } from "./Login";
//import { UncontrolledLogin } from "./UncontrolledLogin";
import { ToDoList } from "./ToDoList";


export class App extends React.Component{
  onLogin(state){
    console.log(state)
  }
  render(){
      return (
        <Container title="Welcome aboard!">
          <InteractiveWelcome />
          <Counter initialValue={0} />
          <ClickTracker />    
          <Login passFunction = {this.onLogin}/> 
          <ToDoList render={(items, del) => {
             return (
               <>
                 <ul>
                   {items.map((todo, index) => (
                     <li key={index}>
                       {todo}{" "}
                       <button name={index} onClick={del}>
                         remove
                       </button>
                     </li>
                   ))}
                 </ul>
               </>
             );
           }}/>
        </Container>
      );
  }
} 



