import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContextProvider'
import './InfoPage.css'

import logo from '../img/Rectangle 1.svg'
import vector1 from '../img/Vector (2).svg'
import vector2 from '../img/Vector (1).svg'
import vector3 from '../img/Vector (3).svg'
import vector4 from '../img/Vector.svg'
import { useIncome } from '../contexts/IncomeContextProvider'
import { useExpense } from '../contexts/ExpenseContextProvider'

const InfoPage = () => {
	const navigate = useNavigate()
	const { checkAuth, handleLogout } = useAuth()
	const { incomes, totalIncome, getTotalIncome } = useIncome()
	const [modal, setModal] = useState('none')

	useEffect(() => {
		getTotalIncome()
	}, [])

	function logout() {
		const token = JSON.parse(localStorage.getItem('token'))
		handleLogout(token.refresh, navigate)
	}

	return (
		<>
			<div className='info-nav'>
				<div
					className='info-nav__left-block'
					onClick={() => {
						navigate('/')
					}}
				>
					<img src={logo} width={79} height={53} alt='' />
					<h4 className='logo_text-info'>Akatscoin</h4>
				</div>
				<div className='info-nav__right-block'>
					<img src={vector1} alt='' />
					<img src={vector2} alt='' />
					<img
						className='logout-img'
						src={vector3}
						alt='logout-icon'
						onClick={logout}
					/>
				</div>
			</div>
			<div className='containerInfo'>
				<NavLink to='/income'>
					<div className='info_block'>
						{/* <h3>{totalIncome[0].income}</h3> */}
						<p className='info-block-desc'>Income</p>
					</div>
				</NavLink>
				<NavLink to='/output'>
					<div className='info_block'>
						{/* <h3>{totalIncome[0].expense}</h3> */}
						{/* {totalIncome[0].expense} */}
						<p className='info-block-desc'>Expense</p>
					</div>
				</NavLink>
				<div className='info_block balance-block'>
					{/* <h3>{totalIncome[0].balance}</h3> */}
					<p className='info-block-desc'>Balance</p>
				</div>
				<NavLink to='/diagram'>
					<div className='info_block'>
						<h3>Graph</h3>
					</div>
				</NavLink>
			</div>

			<img
				onClick={() => setModal('block')}
				className='btn_add'
				src={vector4}
				alt=''
			/>

			<div
				style={{ display: modal }}
				onClick={() => setModal('none')}
				className='modal'
			>
				<div className='modal_btn'>
					<Link to='/IncomeAdd'>
						<button>Income </button>
					</Link>
					<Link to='/OutputAdd'>
						<button>Expence</button>
					</Link>
				</div>
			</div>
		</>
	)
}
export default InfoPage
