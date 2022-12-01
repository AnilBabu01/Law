import React from "react";
import "./Legal.css";
import hand from "../assets/hand.svg";
import bes from "../assets/bes.svg";
import lap from "../assets/lap.svg";
import mgs from "../assets/mgs.svg";
import Cardagree from "./Cardagree";

const LegalDocuments = () => {
  return (
    <>
      <div className="legalservice">
        <div>
          <h2 className="legaltext">Legal Documents</h2>
          <div className="loremtextlegal">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, non
              massa commodo, nibh sed diam arcu.
            </p>
            <p>Condimentum sagittis purus.</p>
          </div>
          <div className="carddiv">
            <div className="coloreddiv">
              <div className="mgsdiv">
                <img src={mgs} alt="mgs" />
              </div>
              <div>
                <p style={{ color: "white" }} className="normaltext1">
                  {" "}
                  Employment <br />
                  Law & HR
                </p>
              </div>
            </div>
            <div className="nocolordiv">
              <div className="anydiv">
                <img src={lap} alt="mgs" />
              </div>
              <div>
                <p className="normaltext">Business Law</p>
              </div>
            </div>
            <div className="nocolordiv">
              <div className="anydiv">
                <img src={hand} alt="mgs" />
              </div>
              <div>
                <p className="normaltext">Wills & Trusts</p>
              </div>
            </div>
            <div className="nocolordiv">
              <div className="anydiv">
                <img src={bes} alt="mgs" />
              </div>
              <div>
                <p className="normaltext" style={{ marginLeft: "16px" }}>
                  Bespoke Agreements
                </p>
              </div>
            </div>
          </div>
          <div className="howdiv">
            <div className="innerdiv">
              <div>
                <div>
                  <p className="rigttex">How it Works</p>
                  <p className="rigthtext">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="rightinnerdiv">
                  <div className="firttextrightsdiv">
                    <div>
                      <p className="Dummy">Dummy Animations</p>
                      <p className="curses">Cursus nibh</p>
                    </div>
                    <div>
                      <div style={{ marginTop: "32px" }}>
                        <div className="anymation"></div>
                      </div>

                      <div className="threeanimation">
                        <div className="anymatuon1"></div>
                        <div className="animation2"></div>
                        <div className="animation3"></div>
                      </div>
                    </div>
                  </div>
                  <div className="fivedivmain">
                    <div className="five1"></div>
                    <div className="five2"></div>
                    <div className="five1"></div>
                    <div className="five1"></div>
                    <div className="five1"></div>
                  </div>
                  <div className="commondiv">
                    <div className="common"></div>
                    <div className="notcommon1"></div>
                  </div>
                  <div className="commondiv">
                    <div className="common"></div>
                    <div className="notcommon2"></div>
                  </div>
                  <div className="commondiv">
                    <div className="common"></div>
                    <div className="notcommon3"></div>
                  </div>
                </div>
              </div>
              <div className="leftinnnermain">
                <Cardagree />
                <Cardagree />
                <Cardagree />
                <Cardagree />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalDocuments;
