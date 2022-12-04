import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./InfoPage.css";
const InfoPage = () => {
  const [modal, setModal] = useState("none");
  return (
    <>
      <div className="containerInfo">
        <NavLink to="/income">
          <div className="info_block">
            <h3>10000</h3>
            <p>Income</p>
          </div>
        </NavLink>
        <NavLink to="/output">
          <div className="info_block">
            <h3>5000</h3>
            <p>Expense</p>
          </div>
        </NavLink>
        <Link>
          <div className="info_block">
            <h3>30000</h3>
            <p>Balance</p>
          </div>
        </Link>
        <NavLink to="/diagram">
          <div className="info_block">
            <h3>Graph</h3>
          </div>
        </NavLink>
      </div>

      <button className="btn_add" onClick={() => setModal("block")}>
        +
      </button>

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
