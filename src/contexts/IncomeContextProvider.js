import axios from 'axios'
import React, { createContext } from 'react'

export const incomeContext = createContext()
const API = 'http://35.203.116.125/api/v1/'

const IncomeContextProvider = ({ children }) => {
  const servise = `${API}service/`
  console.log(servise)
  async function addIncome(amount) {
    try {
      const formData = new FormData()
      formData.append('income', amount)
      await axios.post(servise, formData)
    } catch (error) {
      return error
    }
  }
  let cloud = { addIncome }
  return (
    <incomeContext.Provider value={cloud}>{children}</incomeContext.Provider>
  )
}
export default IncomeContextProvider
