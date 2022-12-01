import React from "react";
import m from "../assets/m.jpeg";
import "./Service.css";
const lawCard = () => {
  return (
    <>
      <div>
        <div className="textmainss">
          <img src={m} alt="m" />
        </div>
        <div className="namedivmain">
          <p className="nametext">Kishan Bhatt</p>
          <p className="fondertext">Founder</p>
          <p className="textst">Cricketer and Chef</p>
          <p className="bsc">BSc (Hons) European Politics</p>
          <p className="morebtnz">More About Me</p>
        </div>
      </div>
    </>
  );
};

export default lawCard;
