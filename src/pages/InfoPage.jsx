import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../styles/InfoPage.css";

import logo from "../img/logo.svg";
import vector1 from "../img/vector1.svg";
import fon from "../img/fon.png";
// import vectornew from "../img/vector1new.svg";
import vector2 from "../img/vector2.svg";
import vector3 from "../img/vector3.svg";
import vector4 from "../img/Vector.svg";

const InfoPage = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState("none");
  return (
    <>
      <div className="info-nav">
        <div
          className="info-nav__left-block"
          onClick={() => {
            navigate("/");
          }}>
          <img src={logo} width={79} height={53} alt="" />
          <h4 className="logo_text-info">Akatscoin</h4>
        </div>
        <div className="info-nav__right-block">
          <NavLink className="icone1" to="/history">
            <img src={fon} alt="" />
          </NavLink>
          <img src={vector2} alt="" />

          <img src={vector3} alt="" />
        </div>
      </div>
      <div className="containerInfo">
        <NavLink to="/income">
          <div className="info_block">
            <h3>10,000</h3>

            <span></span>

            <p className="info-block-desc">Income</p>
          </div>
        </NavLink>
        <NavLink to="/output">
          <div className="info_block">
            <h3>5,000</h3> <span></span>
            <p className="info-block-desc">Expense</p>
          </div>
        </NavLink>

        <div className="info_block">
          <h3>30,000</h3> <span></span>
          <p className="info-block-desc">Balance</p>
        </div>
        <NavLink to="/diagram">
          <div className="info_block gh">
            <p className="info-block-desc"></p> <span></span>
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
        className="modal">
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
