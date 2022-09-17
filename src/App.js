import React from "react";
import { Welcome } from "./WelcomeComps/Welcome";
import { Container } from "./Container";
import { Counter } from "./Counters/Counter";
import { ClickCounter } from "./Counters/ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Login } from "./Login";
import { ToDoList } from "./ToDoList";
import { Sum } from "./Sum";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";
import { GithubUser} from "./GitComps/GithubUser";


export class App extends React.Component{
  onLogin(state){
    console.log(state)
  }
  state = {
    language : "en",
    count : true
  }
  LangChangeHandler = (event)=> {
    this.setState({
      language : event.target.value
    })
  }

  hideCounter = () => {
    this.setState((state)=> state.count = !state.count)
  }

  render(){
      return (
        <Container title="FRANCESCO'S REACT EXERCISES APP">
          <Welcome age={29} />      

          <h2>- Press the button to start the timer!</h2>
          <button onClick={this.hideCounter}>Play / Stop</button>
          {this.state.count && <Counter />}

          <ClickTracker />  
          <ClickCounter initialValue={0} />  
          <Login passwordFunction = {this.onLogin}/> 

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

          <div> <h2>- Choose a language:</h2>
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
          
          <GithubUser username="Francxmf"/> 
        </Container>
      );
  }
} 



