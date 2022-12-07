import React, { useEffect, useState } from 'react'
import { useExpense } from '../../contexts/ExpenseContextProvider'
import close from '../../img/close (1).png'

const EditExpense = ({ setOpen, open }) => {
	const { oneExpense, saveExpenseChanges } = useExpense()

	const [expense, setOneExpense] = useState(oneExpense)

	useEffect(() => {
		setOneExpense(oneExpense)
	}, [oneExpense])

	function handleInput(e) {
		if (e.target.name == 'value') {
			let newExpense = {
				...expense,
				[e.target.name]: Number(e.target.value),
			}

			setOneExpense(newExpense)
		} else if (e.target.name == 'category') {
			let newExpense = {
				...expense,
				[e.target.name]: e.target.value.toLowerCase(),
			}

			setOneExpense(newExpense)
		} else {
			let newExpense = {
				...expense,
				[e.target.name]: e.target.value,
			}

			setOneExpense(newExpense)
		}
	}

	return expense ? (
		<div className='edit-expense-modal'>
			<img
				src={close}
				alt=''
				width={50}
				onClick={() => setOpen(!open)}
				className='edit-expense__close-btn'
			/>
			<div className='edit-expense-block'>
				<input
					type='text'
					className='edit-expense-input'
					value={expense.value}
					onChange={handleInput}
					id=''
					name='value'
				/>

				<select
					value={expense.category}
					onChange={handleInput}
					className='edit-expense-select'
					name='category'
				>
					<option style={{ display: 'none' }} value='value1'>
						Category
					</option>
					<option value='Food'>Food</option>
					<option value='Education'>Education</option>
					<option value='Health'>Health</option>
					<option value='Transportation'>Transportation</option>
					<option value='Beauty'>Beauty</option>
				</select>

				<input
					type='text'
					className='edit-expense-input'
					value={expense.expense_notice}
					onChange={handleInput}
					name='expense_notice'
					id=''
				/>

				<button
					className='edit-expense-button'
					onClick={() => {
						saveExpenseChanges(expense)
						setOpen(!open)
					}}
				>
					Save
				</button>
			</div>
		</div>
	) : null
}

export default EditExpense
