import React from "react";
import Topheader from "./Topheader";
import { NavLink } from "react-router-dom";
import face from "../assets/facebook.svg";
import insta from "../assets/inst.svg";
import profile from "../assets/profile.svg";
import shoop from "../assets/shoop.svg";
import law from "../assets/law.svg";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Header.css";
const Header = () => {
  return (
    <>
      <Topheader />
      <div className="main-header">
        <div className="nav-main">
          <div className="arrow-text">
            <nav className="nav-style-legal">
              <ul className="ul-style">
                <li>
                  <NavLink className="who-text" to="/legaldocuments">
                    Legal Documents
                  </NavLink>
                </li>
                <li>
                  <NavLink className="who-text" to="/legalservices">
                    Legal Services
                  </NavLink>
                </li>
                <li>
                  <NavLink className="who-text" to="/subscriptionplans">
                    Subscription Plans
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <nav className="nav-style-hub">
            <ul className="ul-style-hub">
              <li>
                <NavLink className="who-text" to="/">
                  <img src={law} alt="law" />
                </NavLink>
              </li>
              <li>
                <NavLink className="who-text" to="/">
                  Blog Name Here
                </NavLink>
              </li>
              <li>
                <NavLink className="who-text" to="/">
                  Meet the Lawyers
                </NavLink>
              </li>
              <li>
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </li>
              <li>
                <div className="legel-hub">
                  <img src={profile} alt="profile" />
                  <p>My Legal Hub</p>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
