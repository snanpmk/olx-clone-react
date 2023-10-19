import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

import "./Login.css";

function Login() {
  const { user, logIn } = UserAuth();
  const [error,SetError] = useState()
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();
    SetError('')
    try {
      await logIn(email, password);
      navigate("/");
      
    } catch (error) {
      console.log(error);
      SetError(error.message)
    }
  };

  return (
    <div className="">
      <div className="loginParentDiv">
        {error ? <p>{error}</p>:null}
        <img
          width="200px"
          height="200px"
          src="https://logodownload.org/wp-content/uploads/2016/10/olx-logo-0.png"
        ></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            onChange={(e) => SetEmail(e.target.value)}
            className="input"
            type="email"
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            onChange={(e) => SetPassword(e.target.value)}
            className="input"
            type="password"
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to="/signup">
          <a>Signup</a>
        </Link>
      </div>
    </div>
  );
}

export default Login;
