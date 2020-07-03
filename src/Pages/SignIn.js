import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function SignIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {};
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="login-form">
        <form onSubmit={submitHandler}>
          <h2 className="text-center">Sign In</h2>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend"></div>

              <input
                type="text"
                className="form-container"
                placeholder="Username"
                required="required"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend"></div>

              <input
                type="password"
                className="form-container"
                placeholder="Password"
                required="required"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              Log in
            </button>
          </div>
          <div className="bottom-action clearfix">
            <label className="float-left form-check-label"></label>

            <a href="#" className="float-right">
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center small">
          New to Frida? <Link to="/register">Sign up here</Link>.
        </p>
      </div>
    </div>

    /*   
<div>
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
            <li>
                <h3>Sign In</h3>
            </li>
          <li>
            <label for="username">Username </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </li>
          <li>
            <label for="password">Password </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </li>
          <li>
              <button type="submit" className="btn btn-secondary">Sign In</button>
          </li>
          <li>
              New to Frida?
          </li>
          <li>
              <Link to="/register" className="button">Create your account here</Link>
          </li>
        </ul>
      </form>
    </div>
    </div> */
  );
}
export default SignIn;
