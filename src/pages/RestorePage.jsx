import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const RestorePage = () => {
  const navigate = useNavigate();
  const { passReset } = useAuth();
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  function handleSave() {
    if (!code.trim() || !password.trim() || !password2.trim()) {
      alert("Some inputs are empty!");
      return;
    } else {
      let formData = new FormData();
      formData.append("code", code);
      formData.append("password", password);
      formData.append("password2", password2);
      passReset(formData, navigate);
    }
  }

  return (
    <>
      <h1>Reset Password</h1>
      <input
        type="text"
        placeholder="Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password Confirmation"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </>
  );
};

export default RestorePage;
