import React, { useEffect, useState } from "react";
import { signin } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";



function SignIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
    return () => {};
  }, [userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(username, password));
  };
  return (
    <div>
      <div className="login-form">
        <form onSubmit={submitHandler}>
          <h2 className="text-center">Sign In</h2>
          <div>{loading && <div>Loading...</div>}</div>
          <div>{error && <div>{error}</div>}</div>
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
  );
}
export default SignIn;
