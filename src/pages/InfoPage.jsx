import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContextProvider'
import Avatar from '@mui/material/Avatar'
import '../styles/InfoPage.css'

import logo from '../img/Rectangle 1.svg'
import fon from '../img/fon.png'
import vector1 from '../img/Vector (2).svg'
import vector2 from '../img/Vector (1).svg'
import vector3 from '../img/Vector (3).svg'
import vector4 from '../img/Vector.svg'
import { useIncome } from '../contexts/IncomeContextProvider'
import { useExpense } from '../contexts/ExpenseContextProvider'

const InfoPage = () => {
  const navigate = useNavigate()
  const { checkAuth, handleLogout, notifications } = useAuth()
  const { incomes, balance, getBalance, createService } = useIncome()
  const { showDiagram, expenses } = useExpense()

  const [currentUser, setCurrentUser] = useState(null)
  const [service, setService] = useState(null)

  const [modal, setModal] = useState('none')

  useEffect(() => {
    getBalance()
  }, [])

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem('email')))
  }, [])

  function handleNotifications() {
    const token = JSON.parse(localStorage.getItem('token'))
    const formData = new FormData()
    formData.append('refresh', token.refresh)
    notifications(formData)
  }

  function logout() {
    let token = JSON.parse(localStorage.getItem('token'))
    handleLogout(token.refresh, navigate)
  }

  useEffect(() => {
    showDiagram()
  }, [expenses])

  useEffect(() => {
    const services = JSON.parse(localStorage.getItem('service'))
    setService(services)
  }, [])

  function handleCreate() {
    let date = +prompt('Enter the current date (DD/MM/YYYY)')
    createService(date)
  }

  return (
    <>
      <div className="info-nav">
        <div
          className="info-nav__left-block"
          onClick={() => {
            navigate('/')
          }}>
          <img src={logo} width={79} height={53} alt="" />
          <h4 className="logo_text-info">Akatscoin</h4>
        </div>
        <div className="info-nav__right-block">
          {service ? (
            <h3> Your service: {service}</h3>
          ) : (
            <button className="createService-btn" onClick={handleCreate}>
              Create Service
            </button>
          )}
          <Avatar
            src={currentUser}
            alt={currentUser}
            style={
              currentUser
                ? { backgroundColor: '#BA131A' }
                : { backgroundColor: 'grey' }
            }
          />
          <NavLink className="icone1" to="/history">
            <img src={fon} alt="" />
          </NavLink>
          <img
            className="notifications-img"
            src={vector2}
            alt="notifications-icon"
            onClick={() => handleNotifications()}
          />
          <img
            className="logout-img"
            src={vector3}
            alt="logout-icon"
            onClick={logout}
          />
        </div>
      </div>
      <div className="containerInfo">
        <NavLink to="/income">
          <div className="info_block">
            <h3>{balance.income}</h3> <span></span>
            <p className="info-block-desc">Income</p>
          </div>
        </NavLink>
        <NavLink to="/output">
          <div className="info_block">
            <h3>{balance.expense}</h3> <span></span>
            <p className="info-block-desc">Expense</p>
          </div>
        </NavLink>
        <Link>
          <div className="info_block">
            <h3>{balance.balance}</h3> <span></span>
            <p className="info-block-desc">Balance</p>
          </div>
        </Link>
        <NavLink to="/diagram">
          <div className="info_block">
            <p className="info-block-desc"></p> <span></span>
            <h3 className="gh">Graph</h3>
          </div>
        </NavLink>
      </div>

      <img
        onClick={() => setModal('block')}
        className="btn_add"
        src={vector4}
        alt=""
      />

      <div
        style={{ display: modal }}
        onClick={() => setModal('none')}
        className="modal">
        <div className="modal_btn">
          <Link to="/IncomeAdd">
            <button>Income </button>
          </Link>
          <Link to="/OutputAdd">
            <button>Expence</button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default InfoPage
