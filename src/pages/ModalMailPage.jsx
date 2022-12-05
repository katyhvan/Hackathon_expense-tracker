import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import Logo from "../pages/Logo";
import "../styles/ModalMail.css";

function ModalMailPage() {
  const navigate = useNavigate();
  const { getMail } = useAuth();
  const [email, setEmail] = useState("");

  function handleSend() {
    if (!email.trim()) {
      alert("Input is empty!");
      return;
    }

    let formData = new FormData();
    formData.append("email", email);
    getMail(formData, navigate);
  }

  return (
    <>
      <Logo />
      <div className="modal-mail">
        <h2 className="mail-title">Reset Password</h2>
        <input
          className="mail-inp"
          type="text"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="send-btn" onClick={handleSend}>
          Sent code
        </button>
      </div>
    </>
  );
}

export default ModalMailPage;
