import React from "react";
import { LanguageContext } from "./LanguageContext";

 const strings = {
     en : {selected_Lang : "Long live the Q..King!"},
     it : {selected_Lang : "Verità per Giulio Regeni!"},

 }

 export class DisplayLanguage extends React.Component {
   render() {
     return <div>
         <LanguageContext.Consumer>
             {Language => {
                 return <h1> {strings[Language].selected_Lang
             }</h1>}}
         </LanguageContext.Consumer>
     </div>
   }
 }