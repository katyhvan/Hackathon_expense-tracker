import React, { createContext, useContext, useReducer, useState } from 'react'
import axios from 'axios'

const incomeContext = createContext()
export const useIncome = () => useContext(incomeContext)

const API = 'http://35.203.116.125/api/v1/'

const INIT_STATE = {
	incomes: [],
	oneIncome: null,
	balance: [],
}

function reducer(state = INIT_STATE, action) {
	switch (action.type) {
		case 'GET_INCOME':
			return { ...state, incomes: action.payload }
		case 'GET_ONE_INCOME':
			return { ...state, oneIncome: action.payload }
		case 'GET_BALANCE':
			return { ...state, balance: action.payload }
		default:
			return state
	}
}

const IncomeContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INIT_STATE)

	async function getIncome() {
		try {
			const service = JSON.parse(localStorage.getItem('service'))
			let { data } = await axios(`${API}income/`)

			data.sort((a, b) => {
				return a.id - b.id
			})

			data = data.filter(item => {
				return item.service == service
			})

			dispatch({
				type: 'GET_INCOME',
				payload: data,
			})
		} catch (err) {
			console.error(err)
		}
	}

	async function getBalance() {
		try {
			const tokens = JSON.parse(localStorage.getItem('token'))
			const email = JSON.parse(localStorage.getItem('email'))

			const Authorization = `JWT ${tokens.access}`

			const config = {
				headers: {
					Authorization,
				},
			}

			let { data } = await axios(`${API}service/`, config)

			data = data.filter(item => {
				return item.owner == email
			})

			data.forEach(item => {
				localStorage.setItem('service', JSON.stringify(item.id))
				console.log(item)
				dispatch({
					type: 'GET_BALANCE',
					payload: item,
				})
			})
		} catch (err) {
			console.log(err)
		}
	}

	async function addIncome(service, amount, navigate) {
		try {
			const formData = new FormData()
			formData.append('value', amount)
			formData.append('service', service)

			const tokens = JSON.parse(localStorage.getItem('token'))

			const Authorization = `JWT ${tokens.access}`

			const config = {
				headers: {
					Authorization,
				},
			}

			await axios.post(`${API}income/`, formData, config)

			alert('income added successfully')

			navigate('/income')
		} catch (err) {
			console.error(err)
		}
	}

	async function deleteIncome(id) {
		const tokens = JSON.parse(localStorage.getItem('token'))

		const Authorization = `JWT ${tokens.access}`

		const config = {
			headers: {
				Authorization,
			},
		}

		await axios.delete(`${API}income/${id}/`, config)

		getIncome()
	}

	async function getOneIncome(id) {
		const tokens = JSON.parse(localStorage.getItem('token'))

		const Authorization = `JWT ${tokens.access}`

		const config = {
			headers: {
				Authorization,
			},
		}

		let { data } = await axios(`${API}income/${id}/`, config)

		dispatch({
			type: 'GET_ONE_INCOME',
			payload: data,
		})
	}

	async function saveIncomeChanges(newIncome) {
		const token = JSON.parse(localStorage.getItem('token'))

		const Authorization = `JWT ${token.access}`

		const config = {
			headers: {
				Authorization,
			},
		}

		await axios.patch(`${API}income/${newIncome.id}/`, newIncome, config)

		alert('ubdated successfully')

		getIncome()
	}

	async function createService(date) {
		try {
			const token = JSON.parse(localStorage.getItem('token'))

			const Authorization = `JWT ${token.access}`

			const config = {
				headers: {
					Authorization,
				},
			}

			await axios.post(`${API}service/`, date, config)
			// localStorage.setItem('service', JSON.stringify())
		} catch (err) {
			console.log(err)
		}
	}

	let values = {
		addIncome,
		getIncome,
		deleteIncome,
		getOneIncome,
		saveIncomeChanges,
		getBalance,
		createService,

		incomes: state.incomes,
		balance: state.balance,
		oneIncome: state.oneIncome,
	}

	return (
		<incomeContext.Provider value={values}>{children}</incomeContext.Provider>
	)
}
export default IncomeContextProvider
