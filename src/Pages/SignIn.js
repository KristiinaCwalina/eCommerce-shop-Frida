

import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";

function SignIn(props) {
    const [username, setUsername]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {};
  }, []);
  const submitHandler = (e)=> {
      e.preventDefault();
  }
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <label for="username">Userame</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </li>
          <li>
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </li>
          <li>
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </li>
          <li>
              <button type="submit" className="button-primary">Sign In</button>
          </li>
          <li>
              New to Frida?
          </li>
          <li>
              <Link to="/register" className="button full-width">Create your account here</Link>
          </li>
        </ul>
      </form>
    </div>
  );
}
export default  SignIn;
