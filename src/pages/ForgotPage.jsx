import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const ForgotPage = () => {
  const navigate = useNavigate();
  const { getMail } = useAuth();
  const [email, setEmail] = useState("");

  function handleSend() {
    if (!email.trim()) {
      alert("Input is empty!");
      return;
    } else {
      let formData = new FormData();
      formData.append("email", email);
      getMail(formData, navigate);
    }
  }

  return (
    <div>
      <h1>Reset Password</h1>
      <input
        type="text"
        placeholder="E-Mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ForgotPage;
