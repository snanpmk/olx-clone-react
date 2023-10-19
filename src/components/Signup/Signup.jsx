import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();
  const { signUp } = UserAuth(); // Destructure only the signUp function
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // Add state for username
  const [phoneNumber, setPhoneNumber] = useState(""); // Add state for phone number

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password, phoneNumber, username); // Pass username and phone number to signUp
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img
          width="200px"
          height="200px"
          src="https://logodownload.org/wp-content/uploads/2016/10/olx-logo-0.png"
          alt="OLX Logo"
        ></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="username"
            name="username"
            value={username} // Use value and onChange to capture the username
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="phone"
            name="phone"
            value={phoneNumber} // Use value and onChange to capture the phone number
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
          />
          <br />
          <br />
          <button type="submit">Signup</button>
        </form>
        <Link to="/login">
          <a>Login</a>
        </Link>
      </div>
    </div>
  );
}
