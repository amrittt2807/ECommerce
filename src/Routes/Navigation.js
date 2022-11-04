import React from "react";
import "./Navigation.style.scss";
import { ReactComponent as Crown } from "../Assets/crown.svg";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
          <Link to="/" className="logo-container">
            <Crown />
          </Link>
        <div className="nav-links-container ">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link  className="nav-link" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
