import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useExpense } from '../contexts/ExpenseContextProvider'
import { historyContext } from '../contexts/HistoryContextProvider'
import photo from '../img/OutputAdd.svg'

const OutputAdd = () => {
	const { addExpense } = useExpense()
	const { addProductToHistory } = useContext(historyContext)
	const navigate = useNavigate()

	const [category, setCategory] = useState('')
	const [service, setService] = useState('')
	const [amount, setAmount] = useState('')
	const [note, setNote] = useState('')

	function handleAdd(e) {
		e.preventDefault()
		if (!category.trim() || !amount.trim()) {
			alert('Заполните нужные поля')
			return
		}

		addExpense(category, amount, note, service, navigate)
		let title = 'Расходы'
		const obj = {
			date: new Date().toDateString(),
			title,
			category,
			amount,
			note,
			service,
		}
		addProductToHistory(obj)
		setCategory('')
		setAmount('')
		setService('')
		setNote('')
	}

	useEffect(() => {
		let myService = JSON.parse(localStorage.getItem('service'))
		setService(myService)
	}, [])

	return (
		<>
			<form onSubmit={e => handleAdd(e)}>
				<img
					className='add_photo'
					style={{ position: 'absolute', zIndex: 2, bottom: 0, right: 0 }}
					src={photo}
					alt=''
				/>
				<div
					style={{
						background:
							'linear-gradient(222.46deg, #EBF5F8 23.89%, #76BACF 182.22%)',
					}}
					className='add'
				>
					<h2>Add Expence </h2>
					<div className='add_inp'>
						{/* <input
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="inp five"
              placeholder="Service"
              type="text"
            /> */}
						<select
							// defaultValue={'value1'}
							value={category}
							onChange={e => setCategory(e.target.value.toLowerCase())}
							className='inp two'
							name='select'
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
							value={amount}
							onChange={e => setAmount(e.target.value)}
							className='inp three'
							placeholder='Amount'
							type='text'
						/>
						<input
							value={note}
							onChange={e => setNote(e.target.value)}
							className='inp four'
							placeholder='Note'
							type='text'
						/>
					</div>
					<button className='btn_save' type='submit'>
						Save
					</button>
				</div>
			</form>
		</>
	)
}

export default OutputAdd
