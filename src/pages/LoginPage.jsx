import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import "../styles/Login.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const { error, setError, loading, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (!email.trim() || !password.trim()) {
      alert("Some inputs are empty!");
      return;
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      login(formData, email, navigate);
    }
  }

  return (
    <>
      <div className="login-page">
        <div className="block__left-login">
          <div className="logo__block-login" onClick={() => navigate("/")}>
            <img
              className="logo"
              src={logo}
              alt="logo"
              width={79}
              height={53}
            />
            <h4 className="logo_text-login">Akatscoin</h4>
          </div>
          <div className="form-block">
            <h2 className="login-title">Sign in</h2>

            <input
              className="login-inp login-mail"
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="login-inp login-pass"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="forgot-pass" onClick={() => navigate("/modalMail")}>
              Forgot Password
            </p>
            <button className="login-btn" onClick={handleLogin}>
              Sign in
            </button>
            <p className="account-text">
              If you don't have an account
              <span
                className="create-link"
                onClick={() => navigate("/registration")}
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
        <div className="block__right-login">
          <h2 className="welcome-title">Welcome Back</h2>
          <p className="welcome-desc">Glad to see you again</p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
