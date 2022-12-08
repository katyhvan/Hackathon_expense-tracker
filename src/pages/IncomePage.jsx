import React, { useState, useEffect } from 'react'
import InfoPage from './InfoPage'
import { useIncome } from '../contexts/IncomeContextProvider'
import { useExpense } from '../contexts/ExpenseContextProvider'
import EditIncome from '../components/income/EditIncome'

import '../styles/IncomePage.css'

const IncomePage = () => {
	let cntmenu = document.querySelector('.contextmenu')

	const [open, setOpen] = useState(false)

	const { getIncome, incomes, deleteIncome, getOneIncome, getTotalIncome } =
		useIncome()

	const { expenses, getTotalExpense } = useExpense()

	useEffect(() => {
		getIncome()
	}, [])

	useEffect(() => {
		getTotalIncome()
	}, [incomes])

	useEffect(() => {
		getTotalExpense()
	}, [expenses])

	function contextmenu(e) {
		cntmenu.setAttribute(
			'style',
			`display: block; 
      top:${e.clientY}px; 
      left: ${e.clientX}px;`
		)

		cntmenu.setAttribute('id', `${e.target.parentNode.id}`)
	}

	function handleEdit(e) {
		getOneIncome(e.target.parentNode.id)
	}

	function handleDelete(id) {
		deleteIncome(id)
		cntmenu.style.display = 'none'
	}

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
							<div
								className='card'
								key={item.id}
								id={item.id}
								onClick={() => {
									cntmenu.style.display = 'none'
								}}
							>
								<div
									className='card_blk'
									onContextMenu={e => {
										e.preventDefault()
										contextmenu(e)
									}}
								>
									<div className='card_txt'>
										<p>{item.time}</p>
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

			<div className='contextmenu'>
				<p
					onClick={e => {
						setOpen(!open)
						handleEdit(e)
						cntmenu.style.display = 'none'
					}}
				>
					Update
				</p>
				<p
					onClick={e => {
						handleDelete(e.target.parentNode.id)
						cntmenu.style.display = 'none'
					}}
				>
					Delete
				</p>
			</div>

			{open ? <EditIncome setOpen={setOpen} open={open} /> : null}
		</>
	)
}

export default IncomePage
