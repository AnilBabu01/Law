import React from "react";
import Mycard from "./Mycard.js";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "./Slider.css";
const Slider = () => {
  let box = document.querySelector(".product-container");

  const btnpressprev = () => {
    let width = box;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };

  const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };
  return (
    <>
      <div className="legalservicetext" style={{ zIndex: 0 }}>
        <div>
          <p className="sermaintext">Legal Services & Advisory</p>
          <p className="serbottom">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, non
            massa commodo.
          </p>
        </div>
        <div>
          <div className="mainbtn">
            <button onClick={btnpressprev} className="activebtn">
              <KeyboardArrowLeftIcon style={{ color: "white" }} />
            </button>
            <button onClick={btnpressnext} className="activebtn">
              <KeyboardArrowRightIcon style={{ color: "white" }} />
            </button>
          </div>
        </div>
      </div>
      <div className="slider-carousel">
        <div className="slider-container">
          <Mycard cardno="1" />
          <Mycard cardno="2" />
          <Mycard cardno="3" />
          <Mycard cardno="4" />
          <Mycard cardno="5" />
          <Mycard cardno="6" />
          <Mycard cardno="7" />
          <Mycard cardno="8" />
          <Mycard cardno="9" />
          <Mycard cardno="10" />
          <Mycard cardno="11" />
          <Mycard cardno="12" />
          <Mycard cardno="13" />
        </div>
      </div>
    </>
  );
};

export default Slider;
