import React from "react";
import { useNavigate } from "react-router-dom";
// import img2 from "../img/Frame.svg";
// import img1 from "../img/Frame2.svg";
import two from "../img/two.png";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="containerHome">
        <div className="home_block">
          <div className="block_left">
            {/* <img className="img1" src={img1} alt="" />
          <img className="img2" src={img2} alt="" /> */}
            <img className="img" src={two} alt="" />
          </div>
          <div className="block_right">
            <h2>Take your finances to the next levels!</h2>
            <h4>Don't hesite, money matters.</h4>

            <button onClick={() => navigate("/registration")}>START</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
