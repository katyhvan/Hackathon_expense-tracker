import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useIncome } from '../../contexts/IncomeContextProvider'
import close from '../../img/close (1).png'

const EditIncome = ({ setOpen, open }) => {
	const { getOneIncome, oneIncome, saveIncomeChanges } = useIncome()

	const [income, setIncome] = useState(oneIncome)

	let { id } = useParams()

	useEffect(() => {
		// getOneIncome(id)
	}, [])

	useEffect(() => {
		setIncome(oneIncome)
	}, [oneIncome])

	function handleInput(e) {
		let newIncome = {
			...income,
			value: Number(e.target.value),
		}

		setIncome(newIncome)
	}

	return income ? (
		<div className='edit-income-modal'>
			<img
				src={close}
				alt=''
				width={50}
				onClick={() => setOpen(!open)}
				className='edit-income__close-btn'
			/>
			<div className='edit-income-block'>
				<input
					type='text'
					className='edit-income-input'
					value={income.value}
					onChange={handleInput}
					id=''
				/>

				<button
					className='edit-income-button'
					onClick={() => {
						saveIncomeChanges(income)
						setOpen(!open)
					}}
				>
					Save
				</button>
			</div>
		</div>
	) : null
}

export default EditIncome
