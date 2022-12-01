import React from "react";
import style from "./Home.module.css";
import men from "../assets/men.jpeg";
import searchicon from "../assets/search.svg";
import work1 from "../assets/work1.jpeg";
import work2 from "../assets/work2.jpeg";
import work3 from "../assets/work3.jpeg";
import SearchIcon from "@mui/icons-material/Search";
const Home = () => {
  return (
    <>
      <div className={style.mainhomemain}>
        <div className={style.mainhome}></div>
        <div className={style.contentdiv}>
          <div className={style.imgdiv}>
            <img src={men} alt="men" />
          </div>
          <div className={style.imgrighttext}>
            <p className={style.textimg}>
              Law For Me helps <br />
              you <span style={{ color: "#1FAAFF" }}>understand</span> <br />
              the law
            </p>
            <p className={style.textimginner}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              scelerisque faucibus nunc, turpis metus volutpat ac tristique non.
              Ultricies faucibus amet,
            </p>
            <div className={style.inputdiv}>
              <input type="text" placeholder="Search documents and topics..." />
              <button>
                <SearchIcon style={{ color: "white" }} />
              </button>
            </div>
            <div className={style.workimgdiv}>
              <p>Working with</p>
              <img src={work1} alt="work1" />
              <img src={work2} alt="work1" />
              <img src={work3} alt="work1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
