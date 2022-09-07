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

  render() {
    return (
      <div>
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
        <button disabled={this.state.disabled} onClick={this.loginButtonHandler}>
          Login
        </button>
      </div>
    );
  }
}