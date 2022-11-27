import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/registration")}>Start</button>
    </div>
  );
};

export default HomePage;
