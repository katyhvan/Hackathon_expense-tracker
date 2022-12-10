import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContextProvider'
import { useNavigate } from 'react-router-dom'
import logo from '../img/Rectangle 1.svg'
import background from '../img/login-page/background-login.png'
import decor from '../img/login-page/decor-img.png'

import '../styles/Login.css'

const LoginPage = () => {
  const navigate = useNavigate()
  const { error, setError, loading, login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(e) {
    e.preventDefault()
    if (!email.trim() || !password.trim()) {
      alert('Some inputs are empty!')
      return
    } else {
      let formData = new FormData()
      formData.append('email', email)
      formData.append('password', password)
      login(formData, email, navigate)
    }
  }

  return (
    <div className="login-page">
      <div className="block__left-login">
        <div className="logo__block-login">
          <img src={logo} alt="logo" width={79} height={53} />
          <h4 className="logo_text">Akatscoin</h4>
        </div>
        <form className="form-block" onSubmit={(e) => handleLogin(e)}>
          <h2 className="login-title">Sign in</h2>
          <input
            className="login-inp login-mail"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-inp login-pass"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="forgot-pass" onClick={() => navigate('/modalMail')}>
            Forgot Password
          </p>
          <button className="login-btn" onClick={handleLogin}>
            Sign in
          </button>
        </form>
      </div>
      <div className="block__right-login">
        <h2 className="welcome-title">Welcome Back</h2>
        <p className="welcome-desc">Glad to see you again</p>
      </div>
    </div>
  )
}

export default LoginPage
