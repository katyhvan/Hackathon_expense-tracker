import React from "react";
import "../styles/Registration.css";
import background from "../img/background-img.png";
import logo from "../img/logo.png";
import circle from "../img/circle.png";

const RegistrationPage = () => {
  return (
    <div className="register-page">
      <div className="block-left">
        <div className="logo__block">
          <img src={logo} alt="logo" />
          <h4 className="logo_text">Akatscoin</h4>
        </div>
        <h1 className="block-left__title">Hello Friend</h1>
        <p className="block-left__desc">Сontrol your money with Akatscoin</p>
        <img className="background-img" src={background} alt="background" />
        <img className="circle-img" src={circle} alt="circle" />
      </div>
      <div className="block-right">
        <h2 className="register-title">Create Account</h2>
        <div className="inputs-block">
          <input className="register-inp" type="text" placeholder="Name" />
          <input className="register-inp" type="text" placeholder="E-Mail" />
          <input className="register-inp" type="text" placeholder="Password" />
          <input
            className="register-inp"
            type="text"
            placeholder="Password Confirmation"
          />
          <button className="register-btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
