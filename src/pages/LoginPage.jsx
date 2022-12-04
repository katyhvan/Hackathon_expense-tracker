import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import background from "../img/login-page/background-login.png";
import decor from "../img/login-page/decor-img.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../styles/Login.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { error, setError, loading, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function handleLogin() {
    if (!email.trim() || !password.trim()) {
      alert("Some inputs are empty!");
      return;
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      login(formData, navigate);
    }
  }

  return (
    <div className="login-page">
      <div className="block__left-login">
        <div className="form-block">
          <h2 className="login-title">Sign in</h2>
          <input
            className="login-inp"
            type="text"
            placeholder="E-mail"
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
          <p onClick={() => navigate("/modalMail")}>Forgot password</p>
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
        <h2 className="welcome-title">Welcome back</h2>
        <p className="welcome-desc">Glad to see you again</p>
        <img className="back-img" src={background} alt="background" />
        <img className="decor-img" src={decor} alt="decor" />
      </div>
    </div>
  );
};

export default LoginPage;
