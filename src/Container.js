import React from "react";

 export class Container extends React.Component {
   render() {
     const containerStyle = {
       backgroundColour: "white",
       border: "2px solid red",
       padding: "1rem"
     };

     return (
       <div style={containerStyle}>
         <div>{this.props.title}</div>
         <div>{this.props.children}</div>
       </div>
     );
   }
 }