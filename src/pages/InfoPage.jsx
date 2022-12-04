import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './InfoPage.css'

import logo from '../img/logo.png'
import vector1 from '../img/Vector.jpg'
import vector4 from '../img/Vector.svg'
import vector2 from '../img/Vector (1).jpg'
import vector3 from '../img/Vector (2).jpg'

const InfoPage = () => {
	const navigate = useNavigate()

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
					<img src={vector3} alt='' />
				</div>
			</div>
			<div className='containerInfo'>
				<NavLink to='/income'>
					<div className='info_block'>
						<h3>10,000</h3>
						<p className='info-block-desc'>Income</p>
					</div>
				</NavLink>
				<NavLink to='/output'>
					<div className='info_block'>
						<h3>5,000</h3>
						<p className='info-block-desc'>Expense</p>
					</div>
				</NavLink>
				<Link>
					<div className='info_block'>
						<h3>30,000</h3>
						<p className='info-block-desc'>Balance</p>
					</div>
				</Link>
				<NavLink to='/diagram'>
					<div className='info_block'>
						<h3>Graph</h3>
					</div>
				</NavLink>
			</div>
			<Link to='/modal'>
				<img className='btn_add' src={vector4} alt='' />
			</Link>
		</>
	)
}
export default InfoPage
