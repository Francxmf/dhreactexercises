import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
    _autofocusRef = createRef()

  uLoginHandler = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;
    
    this.props.passFunction({username,password,remember})
  };

  componentDidMount(){
    this._autofocusRef.current.focus()
  }

  render() {
    return (
        <div>
         <h2>User login:</h2>
         <form onSubmit={this.uLoginHandler}>
           <input ref={this._autofocusRef} name="username" />
           <input name="password" type="password" />
           <input name="remember" type="checkbox" />
           <button type="submit">Login</button>
           <button type="reset">Reset</button>
         </form>
        </div>
    );
  }
}