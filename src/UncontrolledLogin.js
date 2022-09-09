import React from "react";

export class UncontrolledLogin extends React.Component {
  uLoginHandler = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;
    
    this.props.passFunction({username,password,remember})
  };

  render() {
    return (
        <div>
        <h2>User login:</h2>
      <form onSubmit={this.uLoginHandler}>
        <input name="username" />
        <input name="password" type="password" />
        <input name="remember" type="checkbox" />
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
      </form>
      </div>
    );
  }
}