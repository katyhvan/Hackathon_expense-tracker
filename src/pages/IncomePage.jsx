import React from 'react'
import { useEffect } from 'react'
import { useIncome } from '../contexts/IncomeContextProvider'
import InfoPage from './InfoPage'

const IncomePage = () => {
	const { getIncome, incomes } = useIncome()

	useEffect(() => {
		getIncome()
	}, [])

	console.log(incomes)

	return (
		<>
			<InfoPage />
			<div className='containerList'>
				<div className='List'>
					<div className='List_text'>
						<div className='card_blk'>
							<div className='list_txt'>
								<p>Date</p>
							</div>
							<div className='list_txt'>
								<p>Total</p>
							</div>
						</div>
					</div>

					{incomes ? (
						incomes.map(item => (
							<div className='card' key={item.id}>
								<div className='card_blk'>
									<div className='card_txt'>
										<p>{item.created_date}</p>
									</div>
									<div className='card_txt'>
										<p>{item.value}$</p>
									</div>
								</div>
							</div>
						))
					) : (
						<h3>null</h3>
					)}
				</div>
			</div>
		</>
	)
}

export default IncomePage
