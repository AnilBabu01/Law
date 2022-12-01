import React from "react";
import "../LegalDocuments/Legal.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import m from "../assets/m.jpeg";
import LawCard from "./lawCard";
import team from "../assets/team.jpeg";
import girl from "../assets/girl.jpeg";
import team1 from "../assets/team1.jpeg";
import water from "../assets/water.svg";
import Slider from "../slider/Slider";
import "./Service.css";

const LegalServices = () => {
  return (
    <>
      <div className="legalservice">
        <div>
          <Slider />

          <div className="legalservicetext">
            <div>
              <p className="sermaintext">Meet the Lawyers</p>
              <p className="serbottom">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci,
                non massa commodo.
              </p>
            </div>
            <div>
              <div className="mainbtn">
                <button className="rightbtn">View All</button>
              </div>
            </div>
          </div>
          <div className="mainlawcarddiv">
            <LawCard />
            <LawCard />
            <LawCard />
            <LawCard />
          </div>

          <div>
            <div className="legalservicetext">
              <div>
                <img className="teamimg" src={team} alt="team" />
              </div>

              <div style={{ paddingLeft: "3rem" }}>
                <p className="imgglefttext">
                  Some Information About Law For Me
                </p>
                <p className="imgglefttext1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lectus amet ullamcorper condimentum posuere. Ornare enim purus
                  orci id senectus enim. Fames justo pretium eget est sed purus
                  risus. Vel aliquet ornare velit at id aliquam facilisis. Nunc
                  mattis.
                </p>
                <button className="aboutbtn">About Us</button>
              </div>
            </div>
          </div>
          <div>
            <div className="legalservicetext">
              <div
                className="imgdivtext"
                style={{ paddingLeft: "1rem", paddingRight: "18rem" }}
              >
                <p className="imgglefttext">Lorem ipsum dolor sit</p>
                <p className="imgglefttext1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lectus amet ullamcorper condimentum posuere. Ornare enim purus
                  orci id senectus enim.
                </p>
                <button className="aboutbtn">How to Guides</button>
              </div>
              <div>
                <div className="imgdivvv">
                  <img className="teamimg1" src={team1} alt="team" />

                  <img className="teamimg2" src={girl} alt="team" />

                  <div className="imgbenar">
                    <div className="quamdinyext">
                      <img src={water} alt="water" />
                      <img src={water} alt="water" />
                      <p>Quam ut viverra porttitor sed.</p>
                    </div>
                    <div className="lotext">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Metus, dolor viverra sed adipiscing posuere duis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="beforeslider">
            <dsiv className="beforetextdiv">
              <div>
                <p className="lointext">Join Our Team</p>
                <p className="afterjoin">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lectus amet ullamcorper condimentum posuere.
                </p>
                <button className="aboutbtn">How to Guides</button>
              </div>
              <div>
                <img className="joinimg" src={team} alt="uuuuu" />
              </div>
            </dsiv>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalServices;
