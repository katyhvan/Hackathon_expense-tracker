import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./InfoPage.css";
const InfoPage = () => {
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
      <Link to="/modal">
        <button className="btn_add">+</button>
      </Link>
    </>
  );
};
export default InfoPage;
