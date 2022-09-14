import { useState } from "react";

export function Login({ passwordFunction }) {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
    disabled: true,
  });
  function userInputsHandler(event) {
    const { name, type, checked, value } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function loginBtnHandler() {
    passwordFunction(data);
  }
  function clearAll() {
    setData({
      username: "",
      password: "",
      remember: false,
    });
  }
  return (
    <form>
      <h2>- User login:</h2>
      <input
        value={data.username}
        onChange={userInputsHandler}
        name="username"
      ></input>
      <input
        value={data.password}
        onChange={userInputsHandler}
        type="password"
        name="password"
      ></input>
      <input
        value={data.remember}
        onChange={userInputsHandler}
        name="remember"
        type="checkbox"
      ></input>
      <button type="button" onClick={loginBtnHandler}>
        Login
      </button>
      <button type="button" onClick={clearAll}>
        Clear fields
      </button>
    </form>
  );
}