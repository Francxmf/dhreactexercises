import React from "react";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { ClickTracker } from "./ClickTracker";
import { Login } from "./Login";
import { ToDoList } from "./ToDoList";
import { Sum } from "./Sum";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";


export class App extends React.Component{
  onLogin(state){
    console.log(state)
  }
  state = {
    language : "en"
  }
  LangChangeHandler = (event)=> {
    this.setState({
      language : event.target.value
    })
  }

  render(){
      return (
        <Container title="FRANCESCO'S REACT EXERCISES APP">
          <Welcome age={29} />      

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

           <Sum/>

           <div>
            <h2>- Choose a language:</h2>
           <select
             value={this.state.language}
             onChange={this.LangChangeHandler}
           >
             <option value="en">English</option>
             <option value="it">Italiano</option>
           </select>
         </div>
         <LanguageContext.Provider value={this.state.language}>
           <DisplayLanguage currentLang = {this.state.language} />
         </LanguageContext.Provider>

        </Container>
      );
  }
} 



