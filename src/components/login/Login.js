import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="body">
      <form>
        <h1>Explore the World</h1>

        <input type="email" name="" placeholder="Email" />
        <input type="password" name="" placeholder="Password" />
        <button type="submit">Log In</button>
      </form>
      <p>
        don't Have an account <Link to="/register">SignUp</Link>
      </p>
    </div>
  );
}

export default Login;
