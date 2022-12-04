import React from "react";
import "../styles/ModalMail.css";

function ModalMailPage() {
  return (
    <div className="modal-mail">
      <h2>Reset Password</h2>
      <input type="text" placeholder="E-Mail" />
      <button>Send</button>
    </div>
  );
}

export default ModalMailPage;
