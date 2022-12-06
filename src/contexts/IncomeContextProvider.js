import axios from "axios";
import React, { createContext } from "react";

export const incomeContext = createContext();
const API = "http://35.203.116.125/api/v1/";

const IncomeContextProvider = ({ children }) => {
  async function readProduct() {}
  readProduct();
  const service = `${API}income/`;
  console.log(service);
  async function addIncome(amount) {
    try {
      const form = new FormData();
      form.append("income", amount);
      console.log(service, form);
      await axios.post(service, form);
    } catch (error) {
      return error;
    }
  }
  let cloud = { addIncome };
  return (
    <incomeContext.Provider value={cloud}>{children}</incomeContext.Provider>
  );
};
export default IncomeContextProvider;
