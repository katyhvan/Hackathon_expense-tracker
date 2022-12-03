import React, { useContext, useState } from "react";
import photo from "../img/inconeAdd.svg";
import "./incomeAdd.css";
import { incomeContext } from "../contexts/IncomeContextProvider";
const IncomeAdd = () => {
  const { addIncome } = useContext(incomeContext);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  function handleAdd(e) {
    e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
    if (!date.trim() || !category.trim() || !amount.trim() || !note.trim()) {
      alert("Заполните все поля!");
      return;
    }
    let obj = { date, category, amount, note };

    addIncome(obj);
    setDate("");
    setCategory("");
    setAmount("");
    setNote("");
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
              type="text"
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
            <input
              className="inp1 four"
              placeholder="Note"
              type="text"
              value={note}
              onChange={e => setNote(e.target.value)}
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
