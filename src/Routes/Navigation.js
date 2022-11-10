import React, {useContext} from "react";
import "./Navigation.style.scss";
import { ReactComponent as Crown } from "../Assets/crown.svg";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { signUserOut } from "../Utils/Firebase/firebase.util";

const Navigation = () => {
  const {currUser} = useContext(UserContext)

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
          <Link  className="nav-link" to="/auth" onClick={signUserOut}>
            {currUser? "Sign Out" :"Sign In"}
          </Link>
        </div>
        




      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
