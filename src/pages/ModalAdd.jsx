import React from "react";
import { Link } from "react-router-dom";
import InfoPage from "./InfoPage";
import "./ModalAdd.css";
const ModalAdd = () => {
  return (
    <>
      <InfoPage />
      <div className="modal">
        <Link to="/info">
          <button className="btn_close">X</button>
        </Link>
        <div className="modal_btn">
          <Link to="/IncomeAdd">
            <button>Income </button>
          </Link>
          <button>Expence</button>
        </div>
      </div>
    </>
  );
};

export default ModalAdd;
