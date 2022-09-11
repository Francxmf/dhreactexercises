import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    remember: false,
    password: "",
    disabled: true,
  };
  loginInputsHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;
    this.setState(
      {
        [name]: type === "checkbox" ? checked : value,
      },
      () =>
        this.setState({
          disabled:
            this.state.username !== "" && this.state.password !== ""
              ? false
              : true,
        })
    );
  };
  loginButtonHandler = (event) => {
     this.props.passFunction(this.state)
  };
  resetButtonHandler = (event)=>{
    this.setState({
        username : "",
        password : "",
        remember : false
    })
  }

  render() {
    const logBtnStyle = {
      backgroundColor : this.state.password.length <= 8 ? "red" : "green",
      color : "white"
    }
    return (
      <div>
        <h2> User login:</h2>
        <input
          name="username"
          onChange={this.loginInputsHandler}
          value={this.state.username}
        />
        <input
          name="password"
          type="password"
          onChange={this.loginInputsHandler}
          value={this.state.password}
        />
        <input
          name="remember"
          type="checkbox"
          onChange={this.loginInputsHandler}
          checked={this.state.remember}
        />
        <button style={logBtnStyle} disabled={this.state.disabled} onClick={this.loginButtonHandler}>Login</button>
        <button onClick={this.resetButtonHandler}>reset</button>
      </div>
    );
  }
}
