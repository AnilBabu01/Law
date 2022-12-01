import React from "react";
import men from "../assets/m.jpeg";
import "./Mycard.css";
const Mycard = () => {
  return (
    <div className="mycard">
      <img src={men} alt="img" />
      <div className="namediv">
        {" "}
        <p>Commercial Law</p>
      </div>
    </div>
  );
};

export default Mycard;
