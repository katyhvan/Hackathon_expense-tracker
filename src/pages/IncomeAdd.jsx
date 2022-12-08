import React, { useContext, useState } from 'react'
import photo from '../img/incomeAdd.svg'
import '../styles/incomeAdd.css'
import { incomeContext, useIncome } from '../contexts/IncomeContextProvider'
import { useNavigate } from 'react-router-dom'

const IncomeAdd = () => {
  const { addIncome } = useIncome()
  const [amount, setAmount] = useState('')
  const [service, setServices] = useState('')
  const navigate = useNavigate()

  function handleAdd(e) {
    e.preventDefault() // останавливает автообновление бразуреа при отправке данных через form
    // if (!amount.trim() || !service.trim()) {
    // 	alert('Заполните все поля!')
    // 	return
    // }

    addIncome(Number(service), Number(amount), navigate)
    // addIncome(amount, service)
    setAmount('')
    setServices('')
  }

  return (
    <>
      <form onSubmit={(e) => handleAdd(e)}>
        {/* <img
          style={{ position: 'absolute', zIndex: 2, bottom: 0, left: 0 }}
          src={photo}
          alt=""
        /> */}
        <div className="add">
          <h2>Add Income </h2>
          <div className="add_inp">
            <input
              className="inp1 three"
              placeholder="Amount"
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <input
              className="inp1 three"
              placeholder="Service"
              type="text"
              value={service}
              onChange={(e) => setServices(e.target.value)}
            />
          </div>
          <button className="btn_save" type="submit">
            Save
          </button>
        </div>
      </form>
    </>
  )
}

export default IncomeAdd
