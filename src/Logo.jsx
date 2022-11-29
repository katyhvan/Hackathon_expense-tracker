import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/Frame 3.svg";
const Logo = () => {
  return (
    <>
      <Link to="/">
        <img style={{ position: "absolute" }} src={logo} alt="" />
      </Link>
    </>
  );
};

export default Logo;
