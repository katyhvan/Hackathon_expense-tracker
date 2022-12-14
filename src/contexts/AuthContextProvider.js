import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'

const authContext = createContext()
export const useAuth = () => useContext(authContext)

const API = 'http://35.203.116.125/api/v1/'

const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(false)
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)

	async function register(formData, navigate) {
		setLoading(true)
		try {
			const res = await axios.post(`${API}accounts/register/`, formData)
			localStorage.setItem('token', JSON.stringify(res.data))
			navigate('/login')
			alert('Please check mail and activate your account!')
			console.log(res)
		} catch (err) {
			setError(Object.values(err.response.data))
			console.log(err)
		} finally {
			setLoading(false)
		}
	}

	async function login(formData, email, navigate) {
		setLoading()
		try {
			const res = await axios.post(`${API}accounts/login/`, formData)
			localStorage.setItem('token', JSON.stringify(res.data))
			localStorage.setItem('email', JSON.stringify(email))
			setCurrentUser(email)
			navigate('/info')
		} catch (err) {
			// setError([err.response.data.detail])
			console.log(err)
			alert('Please check, activate or create an account')
		} finally {
			setLoading()
		}
	}

	async function getMail(formData, navigate) {
		try {
			const res = await axios.post(`${API}accounts/forgot/`, formData)
			navigate('/restore')
		} catch (err) {
			setError(err)
		} finally {
			setLoading()
		}
	}

	async function passReset(formData, navigate) {
		try {
			const res = await axios.post(`${API}accounts/restore/`, formData)
			navigate('/login')
		} catch (err) {
			setError(err)
		} finally {
			setLoading()
		}
	}

	async function checkAuth() {
		let token = JSON.parse(localStorage.getItem('token'))

		try {
			let Autorization = `Token ${token.access}`
			let res = await axios.post(
				`${API}accounts/logout/`,
				{ refresh: token.refresh },
				{ headers: { Autorization } }
			)

			localStorage.setItem(
				'token',
				JSON.stringify({ refresh: token.refresh, access: token.access })
			)
		} catch (error) {}
	}

	async function handleLogout(refresh, navigate) {
		let formData = new FormData()
		formData.append('refresh', refresh)

		const token = JSON.parse(localStorage.getItem('token'))
		const Authorization = `JWT ${token.access}`
		const config = {
			headers: {
				Authorization,
			},
		}
		await axios.post(`${API}accounts/logout/`, formData, config)
		localStorage.removeItem('token')
		localStorage.removeItem('email')
		localStorage.removeItem('service')
		setCurrentUser(false)
		navigate('/')
	}

	async function notifications(formData) {
		const token = JSON.parse(localStorage.getItem('token'))
		const Authorization = `JWT ${token.access}`
		const config = {
			headers: {
				Authorization,
			},
		}
		try {
			let res = await axios.post(
				`${API}accounts/follow-notifications/`,
				formData,
				config
			)
			alert('Successfully subscribed to notifications!')
			console.log(res)
		} catch (error) {
			setError(error)
			console.log(error)
		}
	}

	const values = {
		currentUser,
		error,
		loading,

		setCurrentUser,
		setError,
		setLoading,
		register,
		login,
		getMail,
		passReset,
		checkAuth,
		handleLogout,
		notifications,
	}

	return (
		<>
			<authContext.Provider value={values}>{children}</authContext.Provider>
		</>
	)
}

export default AuthContextProvider
