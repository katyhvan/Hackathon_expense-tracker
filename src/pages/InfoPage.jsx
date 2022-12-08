import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContextProvider'
import Avatar from '@mui/material/Avatar'
import '../styles/InfoPage.css'

import logo from '../img/logo.png'
import vector1 from '../img/Vector (2).svg'
import vector2 from '../img/Vector (1).svg'
import vector3 from '../img/Vector (3).svg'
import vector4 from '../img/Vector.svg'

const InfoPage = () => {
  const navigate = useNavigate()
  const { currentUser, checkAuth, notifications, handleLogout } = useAuth()
  const [modal, setModal] = useState('none')

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth()
    }
  }, [])

  function logout() {
    const token = JSON.parse(localStorage.getItem('token'))
    const formData = new FormData()
    formData.append('refresh', token.refresh)
    handleLogout(formData, navigate)
  }

  function handleNotifications() {
    const token = JSON.parse(localStorage.getItem('token'))
    const formData = new FormData()
    formData.append('refresh', token.refresh)
    notifications(formData)
  }

  return (
    <>
      <div className="info-nav">
        <div
          className="info-nav__left-block"
          onClick={() => {
            navigate('/')
          }}
        >
          <img src={logo} width={79} height={53} alt="" />
          <h4 className="logo_text-info">Akatscoin</h4>
        </div>
        <div className="info-nav__right-block">
          <Avatar
            src={currentUser}
            alt={currentUser}
            style={
              currentUser
                ? { backgroundColor: '#BA131A' }
                : { backgroundColor: 'grey' }
            }
          />
          <img src={vector1} alt="" />
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
            <h3>10,000</h3>
            <p className="info-block-desc">Income</p>
          </div>
        </NavLink>
        <NavLink to="/output">
          <div className="info_block">
            <h3>5,000</h3>
            <p className="info-block-desc">Expense</p>
          </div>
        </NavLink>
        <Link>
          <div className="info_block">
            <h3>30,000</h3>
            <p className="info-block-desc">Balance</p>
          </div>
        </Link>
        <NavLink to="/diagram">
          <div className="info_block">
            <h3>Graph</h3>
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
        className="modal"
      >
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
