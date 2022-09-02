//greetings = (name) => {<h1>Hello, {name}!</h1>};


import React from "react";
import  ReactDOM  from "react-dom";

function helloSomeone(name) {
  return <h1>Hello, {name}</h1>;
}

const container = document.querySelector("#root")

const root = ReactDOM.createRoot(container)

root.render(helloSomeone("Ciccio"))
