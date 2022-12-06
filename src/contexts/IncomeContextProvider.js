import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'

const incomeContext = createContext()
export const useIncome = () => useContext(incomeContext)

const API = 'http://35.203.116.125/api/v1/'

const IncomeContextProvider = ({ children }) => {
	const [incomes, setIncomes] = useState([])

	async function getIncome() {
		try {
			const response = await axios(`${API}income/`)
			setIncomes(response.data)
		} catch (err) {
			console.error(err)
		}
	}

	async function addIncome(service, amount) {
		try {
			const formData = new FormData()
			formData.append('value', amount)
			formData.append('service', service)

			// console.log(typeof amount, typeof service)
			const tokens = JSON.parse(localStorage.getItem('token'))

			const Authorization = `JWT ${tokens.access}`

			const config = {
				headers: {
					Authorization,
				},
			}

			await axios.post(`${API}income/`, formData, config)
		} catch (err) {
			console.error(err)
		}
	}

	let values = {
		addIncome,
		getIncome,

		incomes,
	}

	return (
		<incomeContext.Provider value={values}>{children}</incomeContext.Provider>
	)
}
export default IncomeContextProvider
