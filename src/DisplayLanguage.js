import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

 export function DisplayLanguage() {
  const strings = {
    en : {selected_Lang : "Long live the Q..King!"},
    it : {selected_Lang : "Verità per Giulio Regeni!"},
  };
  const language = useContext(LanguageContext);
  return (
    <div>
      <h1> {strings[language].selected_Lang}</h1>
    </div>
  );}