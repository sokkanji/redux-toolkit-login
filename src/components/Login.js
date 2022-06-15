import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/user";

function Login() {
  const dispatch = useDispatch();

  const handleClickLogin = () => {
    dispatch(login({ name: "sokkanji", age: 20, email: "react@gmail.com" }));
  };

  const handeClickLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <button onClick={handleClickLogin}>Login</button>
      <button onClick={handeClickLogout}>Logout</button>
    </div>
  );
}

export default Login;
