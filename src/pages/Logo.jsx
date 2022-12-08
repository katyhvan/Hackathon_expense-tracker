import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Frame 3.svg";
const Logo = () => {
  return (
    <>
      <Link to="/">
        <img
          className="logo"
          style={{
            position: "absolute",
            top: "15px",
            left: "50px",
          }}
          src={logo}
          alt=""
        />
      </Link>
    </>
  );
};

export default Logo;
