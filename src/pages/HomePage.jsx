import React from "react";
import { useNavigate } from "react-router-dom";
import two from "../img/two.png";
import mobile from "../img/mobile_home.svg";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <img
        style={{ position: "absolute", bottom: 0, right: 0 }}
        className="mobile_home"
        src={mobile}
        alt=""
      />
      <div className="containerHome">
        <div className="home_block">
          <div className="block_left">
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
