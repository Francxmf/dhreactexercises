import React from "react";

export class HelloWorld extends React.Component{
    render(){
        return <h1> Hello, World! </h1>
    }
}

export class App extends React.Component{
    render(){
        return (
            <div>
                <HelloWorld />
            </div>
        )
    }
}