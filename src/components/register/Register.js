import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  
  return (
    <div className="body">
      <form>
        <h1>Create new Account</h1>
        <input type="text" name="" placeholder="UserName" />
        <input type="email" name="" placeholder="Email" />
        <input type="password" name="" placeholder="Password" />
        <input type="password" name="" placeholder="Confirm Password" />
        <button type="submit">SignUp</button>
      </form>
      <p>
        Already Have an account <Link to="/login">SignIn</Link>
      </p>
    </div>
  );
}

export default Register;
