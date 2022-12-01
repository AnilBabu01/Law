import React from "react";
import agree from "../assets/agree.svg";
const Cardagree = () => {
  return (
    <>
      <div className="leftdivinnner">
        <div className="lattediv">
          <div className="agreedivimg">
            <img src={agree} alt="agree" />
          </div>

          <p>Letters</p>
        </div>
        <p className="agreyext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue.
        </p>
        <div className="agreebitndiv">
          <button className="innserbtn1">£125 + VAT</button>
          <button className="innserbtn2">Buy Now</button>
        </div>

        <div className="ormaindiv">
          <hr />
          <div className="ortext">
            <p>Or</p>
          </div>
        </div>

        <div className="aceesbtn">
          <button className="buynow">Access for Free</button>
        </div>
      </div>
    </>
  );
};

export default Cardagree;
