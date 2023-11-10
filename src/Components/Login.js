import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const redirectToRegister = () => {
    // Redirect to the Register route
    navigate("/register");
  };

  return (
    <div id="login">
      <div id="log">
        <input type="text" placeholder="Name" />
        <br />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <br />
        <div id="g1">
          <input type="submit" />
          <br />
        </div>
        <button id="loginregister" onClick={redirectToRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;
