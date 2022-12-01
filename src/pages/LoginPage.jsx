import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import background from "../img/login-page/background-login.png";
import decor from "../img/login-page/decor-img.png";

import "../styles/Login.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const { error, setError, loading, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (!email.trim() || !password.trim()) {
      alert("Some iputs are empty!");
      return;
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      login(formData, email, navigate);
    }
  }

  return (
    <div className="login-page">
      <div className="block__left-login">
        <div className="logo__block login">
          <img src={logo} alt="logo" />
          <h4 className="logo_text">Akatscoin</h4>
        </div>
        <form className="form-block">
          <h2 className="login-title">Sign in</h2>
          <input
            className="login-inp"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-inp"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn" onClick={handleLogin}>
            Sign in
          </button>
        </form>
      </div>
      <div className="block__right-login">
        <img className="back-img" src={background} alt="background" />
        <img className="decor-img" src={decor} alt="decor" />
      </div>
    </div>
  );
};

export default LoginPage;
