import axios from "axios";
import React, { createContext, useContext } from "react";

const expenseContext = createContext();
export const useExpense = () => useContext(expenseContext);
const API = "http://35.203.116.125/api/v1/";

const ExpenseContextProvider = ({ children }) => {
  async function addExpense(category, amount, note, service) {
    try {
      let formData = new FormData();
      formData.append("category", category);
      formData.append("value", amount);
      formData.append("expense_notice", note);
      formData.append("service", service);
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `JWT${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      console.log(config);
      await axios.post(`${API}expense/`, formData, config);
    } catch (error) {
      return error;
    }
  }
  let cloud = { addExpense };
  return (
    <expenseContext.Provider value={cloud}>{children}</expenseContext.Provider>
  );
};
export default ExpenseContextProvider;
