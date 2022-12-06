import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";
import "./InfoPage.css";

import logo from "../img/logo.png";
import vector1 from "../img/Vector.jpg";
import vector4 from "../img/Vector.svg";
import vector2 from "../img/Vector (1).jpg";
import vector3 from "../img/Vector (2).jpg";

const InfoPage = () => {
  const navigate = useNavigate();
  const { checkAuth, handleLogout } = useAuth();
  const [modal, setModal] = useState("none");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  const token = JSON.parse(localStorage.getItem("token"));

  function logout() {
    const formData = new FormData();
    formData.append("refresh", token.refresh);
    handleLogout(formData, navigate);
  }

  return (
    <>
      <div className="info-nav">
        <div
          className="info-nav__left-block"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} width={79} height={53} alt="" />
          <h4 className="logo_text-info">Akatscoin</h4>
        </div>
        <div className="info-nav__right-block">
          <img
            className="history-img"
            src={vector1}
            alt="history-icon"
            onClick={() => navigate("/history")}
          />
          <img src={vector2} alt="" />
          <img
            className="logout-img"
            src={vector3}
            alt="logout-icon"
            onClick={logout}
          />
        </div>
      </div>
      <div className="containerInfo">
        <NavLink to="/income">
          <div className="info_block">
            <h3>10,000</h3>
            <p className="info-block-desc">Income</p>
          </div>
        </NavLink>
        <NavLink to="/output">
          <div className="info_block">
            <h3>5,000</h3>
            <p className="info-block-desc">Expense</p>
          </div>
        </NavLink>
        <Link>
          <div className="info_block">
            <h3>30,000</h3>
            <p className="info-block-desc">Balance</p>
          </div>
        </Link>
        <NavLink to="/diagram">
          <div className="info_block">
            <h3>Graph</h3>
          </div>
        </NavLink>
      </div>

      <img
        onClick={() => setModal("block")}
        className="btn_add"
        src={vector4}
        alt=""
      />

      <div
        style={{ display: modal }}
        onClick={() => setModal("none")}
        className="modal"
      >
        <div className="modal_btn">
          <Link to="/IncomeAdd">
            <button>Income </button>
          </Link>
          <Link to="/OutputAdd">
            <button>Expence</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default InfoPage;
