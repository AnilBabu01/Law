import React from "react";
import { NavLink } from "react-router-dom";
import face from "../assets/facebook.svg";
import insta from "../assets/inst.svg";
import linkdlen from "../assets/linkdlen.svg";
import twiter from "../assets/twiter.svg";
import arrow from "../assets/arrow.svg";
import "./Header.css";
const Topheader = () => {
  return (
    <>
      <div className="main-top">
        <div className="nav-main">
          <div className="arrow-text">
            <img src={arrow} alt="arrow" />
            <p>Some Offer / CTA goes here / Lorem Ipsum</p>
          </div>

          <nav className="nav-style">
            <ul className="ul-style">
              <li>
                <NavLink className="who-text" to="/">
                  Who We Are
                </NavLink>
              </li>
              <li>
                <NavLink className="who-text" to="/">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  {" "}
                  <img src={face} alt="arrow" />{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <img src={twiter} alt="arrow" />{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <img src={linkdlen} alt="arrow" />{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  {" "}
                  <img src={insta} alt="arrow" />{" "}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Topheader;
