import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const openmenu = () => {
    document.getElementById("side-menu").style.display = "block";
    document.getElementById("menu-btn").style.display = "none";
    document.getElementById("close-btn").style.display = "block";
  };
  const closemenu = () => {
    document.getElementById("side-menu").style.display = "none";
    document.getElementById("menu-btn").style.display = "block";
    document.getElementById("close-btn").style.display = "none";
  };
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <div>
      <div className="top-nav-bar">
        <div className="search-box">
          <i className="fa fa-bars" id="menu-btn" onClick={openmenu}></i>
          <i className="fa fa-times" id="close-btn" onClick={closemenu}></i>
          <Link to="/">
            <h3 className="site-name">FRIDA</h3>
          </Link>
          <input type="text" className="form-control" />
          <span className="input-group-text">
            <i className="fa fa-search"></i>
          </span>
        </div>
        <div className="menu-bar">
          <ul>
            <li>
              <Link to="/cart/:id?">
                <i className="fa fa-shopping-cart"></i>Cart
              </Link>
            </li>

            <li>
              <Link to="/signin">Log In</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
