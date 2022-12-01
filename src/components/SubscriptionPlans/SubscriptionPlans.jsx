import React from "react";
import "../LegalDocuments/Legal.css";
import "./SubscriptionPlans.css";
import most from "../assets/mukut.jfif";
import CheckIcon from "@mui/icons-material/Check";
const SubscriptionPlans = () => {
  return (
    <>
      <div className="legalservice">
        <div>
          <h2 className="legaltext">Subscription Plans</h2>
          <div className="loremtextlegal1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              sit quis sapien turpis.
            </p>
          </div>

          <div className="mainofinnerdiv">
            <div>
              <div className="want">
                <p>Want a bespoke or outsourced plan?</p>
                <button>Explore Bespoke Plan</button>
              </div>
              <div className="want1">
                <p>
                  Access to All Legal Docs (No Additional cost + editable files)
                </p>
              </div>
              <div className="want1">
                <p>Added to the LFM international partners programme</p>
              </div>
              <div className="want1">
                <p>
                  Annual 60 minute Business Coaching Session/Tax Consultation
                </p>
              </div>
              <div className="want1">
                <p>Free 15 minute Consultation Per Case</p>
              </div>
              <div className="want1">
                <p>15% off Additional Hours</p>
              </div>
              <div className="want11">
                <p>Hours of legal support annually</p>
              </div>
            </div>
            <div className="plan1div1">
              <div className="planinner" style={{ marginRight: "5px" }}>
                <div className="innerplandiv">
                  <p>Access Plan</p>
                  <p className="reverse">£99</p>
                  <p className="vatstyle">+ VAT</p>
                </div>

                <div>
                  <div className="circuledivcomon circulediv1">
                    <CheckIcon
                      style={{ color: "white", height: "10px", width: "10px" }}
                    />
                  </div>
                  <div className="circuledivcomon circulediv2">
                    <CheckIcon
                      style={{ color: "white", height: "10px", width: "10px" }}
                    />
                  </div>
                </div>
                <div className="circulediv6 numdiv">
                  <p>0</p>
                </div>
                <div className="circulediv7 ">
                  <button className="btnstyles ">Get Started</button>
                </div>
              </div>
              <div className="planinner">
                <div className="innerplandiv1">
                  <p>Growth Plan</p>
                  <p className="reverse">£99</p>
                  <p className="vatstyle">+ VAT</p>
                </div>
                <div>
                  <div className="circuledivcomon circulediv1">
                    <CheckIcon
                      style={{ color: "white", height: "10px", width: "10px" }}
                    />
                  </div>
                  <div className="circuledivcomon circulediv2">
                    <CheckIcon
                      style={{ color: "white", height: "10px", width: "10px" }}
                    />
                  </div>
                  <div className="circuledivcomon circulediv3">
                    <CheckIcon
                      style={{ color: "white", height: "10px", width: "10px" }}
                    />
                  </div>
                </div>
                <div className="circulediv6 numdiv">
                  <p>15</p>
                </div>
                <div className="circulediv7 ">
                  <button className="btnstyles ">Get Started</button>
                </div>
              </div>
            </div>
            <div className="plan1div2">
              <div className="planinner" style={{ marginRight: "5px" }}>
                <div className="innerplandiv2">
                  <div className="innerplandiv2topdiv">
                    <img src={most} alt="most" />
                    <p>Most Popular</p>
                  </div>
                  <div className="cenpro">
                    <p className="protext">Professional Plan</p>
                    <p className="reverse1">£99</p>
                    <p className="vatstyle1">+ VAT</p>
                  </div>
                </div>
                <div>
                  <div className="circuledivcomon circulediv1">
                    <CheckIcon
                      style={{ color: "white", height: "10px", width: "10px" }}
                    />
                  </div>
                  <div className="circuledivcomon circulediv2">
                    <CheckIcon
                      style={{ color: "white", height: "10px", width: "10px" }}
                    />
                  </div>
                  <div className="circuledivcomon circulediv3">
                    <CheckIcon
                      style={{ color: "white", height: "10px", width: "10px" }}
                    />
                  </div>
                  <div className="circuledivcomon circulediv4">
                    <CheckIcon
                      style={{ color: "white", height: "10px", width: "10px" }}
                    />
                  </div>
                  <div className="circuledivcomon circulediv5">
                    <CheckIcon
                      style={{ color: "white", height: "10px", width: "10px" }}
                    />
                  </div>
                </div>
                <div className="circulediv6 numdiv">
                  <p>30</p>
                </div>
                <div className="circulediv7 ">
                  <button className="btnstyles ">Get Started</button>
                </div>
              </div>
              <div className="planinner">
                <div className="innerplandiv1">
                  <p>Access Plan</p>
                  <p className="reverse">£99</p>
                  <p className="vatstyle">+ VAT</p>
                </div>
                <div>
                  <div className="circuledivcomon circulediv1">
                    <CheckIcon
                      style={{ color: "white", height: "10px", width: "10px" }}
                    />
                  </div>
                  <div className="circuledivcomon circulediv2">
                    <CheckIcon
                      style={{ color: "white", height: "10px", width: "10px" }}
                    />
                  </div>
                  <div className="circuledivcomon circulediv3">
                    <CheckIcon
                      style={{ color: "white", height: "10px", width: "10px" }}
                    />
                  </div>
                  <div className="circuledivcomon circulediv4">
                    <CheckIcon
                      style={{ color: "white", height: "10px", width: "10px" }}
                    />
                  </div>
                  <div className="circuledivcomon circulediv5">
                    <CheckIcon
                      style={{ color: "white", height: "10px", width: "10px" }}
                    />
                  </div>
                  <div className="circulediv6 numdiv">
                    <p>50</p>
                  </div>
                  <div className="circulediv7 ">
                    <button className="btnstyles ">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPlans;
