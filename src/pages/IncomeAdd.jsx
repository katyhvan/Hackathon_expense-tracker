import React, { useContext, useState } from "react";
import photo from "../img/inconeAdd.svg";
import "../styles/incomeAdd.css";
import { incomeContext } from "../contexts/IncomeContextProvider";
const IncomeAdd = () => {
  const { addIncome } = useContext(incomeContext);
  const [amount, setAmount] = useState(0);

  function handleAdd(e) {
    e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
    if (!amount.trim()) {
      alert("Заполните все поля!");
      return;
    }
    // let obj = { amount: +amount, note };

    addIncome(amount);
    setAmount(0);
  }

  return (
    <>
      <form onSubmit={e => handleAdd(e)}>
        <img
          style={{ position: "absolute", zIndex: 2, bottom: 0, left: 0 }}
          src={photo}
          alt=""
        />
        <div className="add">
          <h2>Add Income </h2>
          <div className="add_inp">
            <input
              className="inp1 three"
              placeholder="Amount"
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
          </div>
          <button className="btn_save" type="submit">
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default IncomeAdd;
