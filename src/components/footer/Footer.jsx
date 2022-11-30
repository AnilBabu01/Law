import React from "react";
import "./Footer.css";
import law1 from "../assets/law1.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import NorthIcon from "@mui/icons-material/North";
const Footer = () => {
  return (
    <>
      <div>
        <div className="footermail">
          <div>
            <div className="signupdiv">
              <div className="rightdiv">
                <p className="signuptext">Sign Up For Legal Updates</p>
                <p className="loremtext">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br /> Lorem facilisis eget at semper tellus, nunc venenatis a
                  commodo.
                </p>
              </div>
              <div className="leftdiv">
                <div className="searchdiv">
                  <input
                    className="serchinput"
                    text="text"
                    placeholder="Your email address"
                  />
                  <button className="serctbtn">Submit</button>
                </div>
                <div>
                  <p className="loremtext">
                    <input type="checkbox" />
                    By checking this box, I agree to the privacy policy,
                    subscribing to updates, newsletters <br /> and marketing
                    information by e-mail from Law For Me
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="productsdiv">
              <div>
                <img src={law1} alt="law " />
                <p className="loremtext">
                  Provide you with legal and HR documents,
                  <br /> how to guides, and legal advice from, <br />
                  qualified Solicitors and Barristers
                </p>
              </div>
              <div>
                <p className="protext">Product</p>
                <p className="loremtext">Commercial Law</p>
                <p className="loremtext">Employment Law</p>
                <p className="loremtext">GDPR Templates</p>
                <p className="loremtext">Making a Claim</p>
              </div>
              <div>
                <p className="protext">Legal Documents</p>
                <p className="loremtext">Mus purus nulla lorem.</p>
                <p className="loremtext">Mi a urna ultricies nisi.</p>
                <p className="loremtext">Risus cursus pretium vel.</p>
                <p className="loremtext">Pretium convallis cursus.</p>
                <p className="loremtext">Gravida id et vulputate.</p>
              </div>
            </div>

            <div className="socialicons">
              <div className="sorialcinisinsta">
                <div className="circurinicon ">
                  <InstagramIcon style={{ color: "white" }} />
                </div>

                <div className="circurinicon">
                  <TwitterIcon style={{ color: "white" }} />
                </div>
              </div>

              <div className="circurinicon">
                <NorthIcon style={{ color: "white" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="bottomfooter">
          <p> Copyright 2022 KB and Co Ltd t/a Law For Me.</p>
          <p>
            KB and Co Ltd t/a Law For Me is not a regulated entity and is not
            authorised by the Solicitors Regulation Authority, the Bar Standards
            Board or CILEX
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
