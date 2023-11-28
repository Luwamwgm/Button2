import React, { useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { NavLink, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <>
      <div id="login-page">
        <div className="container-form">
          <h2 className="title-log">Login</h2>
          <form className="log-form">
            <label htmlFor="email">email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="sample@example.com"
              id="email"
              name="email"
            />

            <label htmlFor="password">password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              required
              placeholder="**********"
              id="password"
              name="password"
            />

            <button onClick={onLogin}>Log In</button>
          </form>
          <p className="text-sm text-white text-center">
            No account yet? <NavLink to="/signup">Sign up</NavLink>
            <br />
            <NavLink to="/selling">Selling</NavLink>
          </p>
        </div>
      </div>
    </>
  );
};
