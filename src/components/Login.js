import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/user";

function Login() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(login({ name: "sokkanji", age: 20, email: "react@gmail.com" }));
  };

  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default Login;
