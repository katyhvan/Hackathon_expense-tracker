import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import "../styles/Registration.css";
// import Loader from "../components/Loader/Loader";
import logo from "../img/logo.png";

const RegistrationPage = () => {
  const navigate = useNavigate();

  const { setError, loading, register } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  function handleSave() {
    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !password2.trim()
    ) {
      alert("Some inputs are empty!");
      return;
    } else if (password !== password2) {
      alert("Password and password confirmation don't match!");
      return;
    } else {
      let formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password2", password2);
      register(formData, navigate);

      setUsername("");
      setEmail("");
      setPassword("");
      setPassword2("");
    }
  }

  useEffect(() => {
    setError(false);
  }, []);

  if (loading) {
    return; // <Loader />
  }

  return (
    <div className="register-page">
      <div className="block-left">
        <div className="logo__block">
          <img src={logo} alt="logo" />
          <h4 className="logo_text">Akatscoin</h4>
        </div>
        <div className="title-block">
          <h1 className="block-left__title">Hello Friend</h1>
          <p className="block-left__desc">Сontrol your money with Akatscoin</p>
        </div>
      </div>
      <div className="block-right">
        <h2 className="register-title">Create Account</h2>
        <form className="inputs-block">
          <input
            className="register-inp"
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            className="register-inp"
            type="text"
            placeholder="E-Mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className="register-inp"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            className="register-inp"
            type="password"
            placeholder="Password Confirmation"
            value={password2}
            onChange={e => setPassword2(e.target.value)}
          />
          <button className="register-btn" onClick={handleSave}>
            Sign Up
          </button>
        </form>
        <p className="account-text">
          Already have an account
          <span className="login-link" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
