import axios from 'axios'
import React, { createContext, useContext, useReducer, useState } from 'react'

const expenseContext = createContext()
export const useExpense = () => useContext(expenseContext)
const API = 'http://35.203.116.125/api/v1/'

const INIT_STATE = {
	expenses: [],
	oneExpense: null,
	totalExpense: 0,
}

function reducer(state = INIT_STATE, action) {
	switch (action.type) {
		case 'GET_EXPENSE':
			return { ...state, expenses: action.payload }
		case 'GET_ONE_EXPENSE':
			return { ...state, oneExpense: action.payload }
		case 'GET_TOTAL_EXPENSE':
			return { ...state, totalExpense: action.payload }
		default:
			return state
	}
}

const ExpenseContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INIT_STATE)

	async function getExpense() {
		try {
			const token = JSON.parse(localStorage.getItem('token'))

			const Authorization = `JWT ${token.access}`

			const config = {
				headers: {
					Authorization,
				},
			}

			let { data } = await axios(`${API}expense/`, config)

			data.sort((a, b) => {
				return a.id - b.id
			})

			dispatch({
				type: 'GET_EXPENSE',
				payload: data,
			})
		} catch (err) {
			console.log(err)
		}
	}

	function getTotalExpense() {
		if (state.expenses.length !== 0) {
			let total = state.expenses.reduce((a, b) => (a += b.value), 0)

			dispatch({
				type: 'GET_TOTAL_EXPENSE',
				payload: total,
			})
		}
	}

	async function addExpense(category, amount, note, service, navigate) {
		try {
			let formData = new FormData()
			formData.append('value', amount)
			formData.append('expense_notice', note)
			formData.append('service', service)
			formData.append('category', category)

			const token = JSON.parse(localStorage.getItem('token'))

			const Authorization = `JWT ${token.access}`

			const config = {
				headers: {
					Authorization,
				},
			}

			await axios.post(`${API}expense/`, formData, config)

			alert('expence added successfully')

			navigate('/output')
		} catch (error) {
			console.log(error)
		}
	}

	async function deleteExpense(id) {
		const tokens = JSON.parse(localStorage.getItem('token'))

		const Authorization = `JWT ${tokens.access}`

		const config = {
			headers: {
				Authorization,
			},
		}

		await axios.delete(`${API}expense/${id}/`, config)

		getExpense()
	}

	async function getOneExpense(id) {
		const tokens = JSON.parse(localStorage.getItem('token'))

		const Authorization = `JWT ${tokens.access}`

		const config = {
			headers: {
				Authorization,
			},
		}

		let { data } = await axios(`${API}expense/${id}/`, config)

		dispatch({
			type: 'GET_ONE_EXPENSE',
			payload: data,
		})
	}

	async function saveExpenseChanges(newExpense) {
		const tokens = JSON.parse(localStorage.getItem('token'))

		const Authorization = `JWT ${tokens.access}`

		const config = {
			headers: {
				Authorization,
			},
		}

		await axios.patch(`${API}expense/${newExpense.id}/`, newExpense, config)

		alert('ubdated successfully')

		getExpense()
	}

	let values = {
		addExpense,
		getExpense,
		deleteExpense,
		getOneExpense,
		saveExpenseChanges,
		getTotalExpense,

		expenses: state.expenses,
		totalExpense: state.totalExpense,
		oneExpense: state.oneExpense,
	}
	return (
		<expenseContext.Provider value={values}>{children}</expenseContext.Provider>
	)
}
export default ExpenseContextProvider
