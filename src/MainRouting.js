import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
import IncomePage from './pages/IncomePage'
import OutputPage from './pages/OutputPage'
import DiagramPage from './pages/DiagramPage'
import InfoPage from './pages/InfoPage'

const PAGES_ROUTES = [
	{
		link: '/',
		element: <HomePage />,
		id: 1,
	},
	{
		link: '/registration',
		element: <RegistrationPage />,
		id: 2,
	},
	{
		link: '/login',
		element: <LoginPage />,
		id: 3,
	},
	{
		link: '/income',
		element: <IncomePage />,
		id: 4,
	},
	{
		link: '/output',
		element: <OutputPage />,
		id: 5,
	},
	{
		link: '/diagram',
		element: <DiagramPage />,
		id: 6,
	},
	{
		link: '/info',
		element: <InfoPage />,
		id: 7,
	},
]

const MainRouting = () => {
	return (
		<Routes>
			{PAGES_ROUTES.map(item => (
				<Route path={item.link} element={item.element} key={item.id} />
			))}
		</Routes>
	)
}

export default MainRouting
