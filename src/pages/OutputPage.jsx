import React, { useEffect, useState } from 'react'
import EditExpense from '../components/expense/EditExpense'
import { useExpense } from '../contexts/ExpenseContextProvider'
import InfoPage from './InfoPage'
import '../styles/OutputPage.css'
import { useIncome } from '../contexts/IncomeContextProvider'

const OutputPage = () => {
	let cntmenu = document.querySelector('.contextmenu')

	const [open, setOpen] = useState(false)

	let foods = []

	const {
		getExpense,
		expenses,
		deleteExpense,
		getOneExpense,
		getTotalExpense,
	} = useExpense()

	const { incomes, getTotalIncome } = useIncome()

	useEffect(() => {
		getExpense()
	}, [])

	useEffect(() => {
		getTotalExpense()
	}, [expenses])

	useEffect(() => {
		getTotalIncome()
	}, [incomes])

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
		getOneExpense(e.target.parentNode.id)
	}

	function handleDelete(id) {
		deleteExpense(id)
		cntmenu.style.display = 'none'
	}

	return (
		<>
			<InfoPage />
			<div
				className='containerList'
				onClick={() => {
					cntmenu.style.display = 'none'
				}}
			>
				<div className='List'>
					<div className='List_text'>
						<div className='card_blk'>
							<div className='list_txt'>
								<p>Date</p>
							</div>
							<div className='list_txt'>
								<p>Category</p>
							</div>
							<div className='list_txt'>
								<p>Note</p>
							</div>
							<div className='list_txt'>
								<p>Total</p>
							</div>
						</div>
					</div>

					{expenses?.map(item => (
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
								<div
									className='card_txt'
									style={{ textTransform: 'capitalize' }}
								>
									<p>{item.category}</p>
								</div>
								<div className='card_txt'>
									<p>{item.expense_notice}</p>
								</div>
								<div className='card_txt'>
									<p>{item.value}$</p>
								</div>
							</div>
						</div>
					))}
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

			{open ? <EditExpense setOpen={setOpen} open={open} /> : null}
		</>
	)
}

export default OutputPage
