import React, { useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	ArcElement,
	Title,
	Legend,
} from 'chart.js'

import logo from '../img/logo.png'
import vector1 from '../img/Vector.jpg'
import vector2 from '../img/Vector (1).jpg'
import vector3 from '../img/Vector (2).jpg'
import vector4 from '../img/Vector.svg'

import '../styles/DiagramPage.css'

ChartJS.register(CategoryScale, LinearScale, ArcElement, Title, Legend)

const DiagramPage = () => {
	const [chartData, setChartData] = useState({
		datasets: [],
	})

	const [chartOptions, setChartOptions] = useState({})

	useEffect(() => {
		setChartData({
			datasets: [
				{
					labels: 'qwerty',
					data: [10, 10, 10, 10, 10, 10],
					backgroundColor: [
						'#BA131A',
						'#DE565C',
						'#FF7278',
						'#FFA4A7',
						'#CE8487',
						'rgba(141, 89, 91, 1)',
					],
					hoverBackgroundColor: 'rgb(255,0,0)',
				},
			],
		})
		setChartOptions({
			responsive: true,
			plugins: {
				legend: {
					position: 'top',
				},
			},
		})
	}, [])

	return (
		<div className='diagram-page'>
			<div className='diagram-nav'>
				<div className='diagram-nav__left-block'>
					<img src={logo} alt='logo' width={79} height={53} />
					<h4 className='logo_text'>Akatscoin</h4>
				</div>
				<div className='diagram-nav__right-block'>
					<img src={vector1} alt='' />
					<img src={vector2} alt='' />
					<img src={vector3} alt='' />
				</div>
			</div>
			<div className='diagram-container'>
				<div className='diagram-container__content-block'>
					<div className='diagram-card diagram-card1'>
						<h3>10,000</h3>
						<h5>Incoming</h5>
					</div>
					<div className='diagram-card diagram-card2'>
						<h3>5,000</h3>
						<h5>Expence</h5>
					</div>
					<div className='diagram-card diagram-card3'>
						<h3>30,000</h3>
						<h5>Balance</h5>
					</div>
					<div className='diagram-card diagram-card4'>
						<h3>Graph</h3>
					</div>
				</div>
				<div className='diagram__parent-block'>
					<div className='diagram__child-block'>
						<div className='chart-block'>
							<Pie className='chart' options={chartOptions} data={chartData} />
							<div className='chart-white-block'></div>
						</div>
						<div className='diagram-info-block'>
							<h3 className='diagram-info-title'>Graph of Expenses</h3>
							<ul>
								<li>
									<p className='element food'>Food</p>
									<p className='price'>12$</p>
								</li>
								<li>
									<p className='element education'>Education</p>
									<p className='price'>15.67$</p>
								</li>
								<li>
									<p className='element healt'>Healt</p>
									<p className='price'>43.98$</p>
								</li>
								<li>
									<p className='element tranportation'>Tranportation</p>
									<p className='price'>3$</p>
								</li>
								<li>
									<p className='element beauty'>Beauty</p>
									<p className='price'> 98$</p>
								</li>
								<li>
									<p className='element food2'>Food</p>
									<p className='price'>12000$</p>
								</li>
							</ul>
						</div>
					</div>
					<img className='plus-btn' src={vector4} alt='' width={80} />
				</div>
			</div>
		</div>
	)
}

export default DiagramPage
