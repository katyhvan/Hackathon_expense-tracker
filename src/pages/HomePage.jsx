import React from "react";
import { useNavigate } from "react-router-dom";
import two from "../img/two.png";
import "../styles/HomePage.css";
import logo from "../img/logo.png";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="containerHome">
        <div className="logo-block-home">
          <img src={logo} width={50} height={30} alt="" />
          <h4 className="logo_text-home">Akatscoin</h4>
        </div>
        <div className="block_right">
          <h2>Take your finances to the next levels!</h2>
          <h4>Don't hesite, money matters.</h4>
          <button onClick={() => navigate("/registration")}>START</button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
