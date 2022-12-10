import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContextProvider'
import { useNavigate } from 'react-router-dom'
import Logo from '../pages/Logo'

import '../styles/Restore.css'

const RestorePage = () => {
  const navigate = useNavigate()
  const { passReset } = useAuth()
  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  function handleSave() {
    if (!code.trim() || !password.trim() || !password2.trim()) {
      alert('Some inputs are empty!')
      return
    } else if (password !== password2) {
      alert("Password and password confirmation don't match!")
    } else {
      let formData = new FormData()
      formData.append('code', code)
      formData.append('password', password)
      formData.append('password2', password2)
      passReset(formData, navigate)
    }
  }

  return (
    <>
      <Logo />
      <div className="restore-page">
        <h1 className="restore-title">Reset Password</h1>
        <input
          className="restore-inp code-inp"
          type="text"
          placeholder="Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <input
          className="restore-inp new-pass-inp"
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="restore-inp new-pass-inp"
          type="password"
          placeholder="New Password Confirmation"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <button className="restore-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </>
  )
}

export default RestorePage
