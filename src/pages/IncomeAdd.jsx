import React, { useContext, useState } from "react";
import photo from "./img/inconeAdd.svg";
import "./incomeAdd.css";
import date from "./img/date.svg";
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
    console.log(obj);
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
              className="inp one"
              placeholder="Date"
              type="text"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
            <select
              className="inp two"
              name="select"
              value={category}
              onChange={e => setCategory(e.target.value)}>
              <option style={{ display: "none" }} value="value1" selected>
                Category
              </option>
              <option value="Food">Food</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Transportation">Transportation</option>
              <option value="Beauty">Beauty</option>
            </select>
            <input
              className="inp three"
              placeholder="Amount"
              type="text"
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
            <input
              className="inp four"
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
