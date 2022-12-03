import axios from "axios";
import React, { createContext } from "react";

export const incomeContext = createContext();
const API = "http://35.203.116.125/";

const IncomeContextProvider = ({ children }) => {
  async function addIncome(newIncome) {
    try {
      console.log(newIncome);
      await axios.post(API, newIncome);
    } catch (error) {
      return error;
    }
  }
  async function incomeProduct() {
    const res = await axios(API);
    console.log(res);
    const data = res.data.security;
    console.log(data);
  }
  incomeProduct();
  let cloud = { incomeProduct, addIncome };
  return (
    <incomeContext.Provider value={cloud}>{children}</incomeContext.Provider>
  );
};
export default IncomeContextProvider;
