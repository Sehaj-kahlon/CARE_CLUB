import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Log in</button>
        <p>This is an Error!</p>
        <span>
          Don't have an Account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
