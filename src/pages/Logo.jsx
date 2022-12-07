import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/Frame 3.svg'
const Logo = () => {
  return (
    <>
      <Link to="/">
        <img
          style={{
            position: 'relative',
            top: '15px',
            marginBottom: '30px',
            left: '50px',
          }}
          src={logo}
          alt=""
        />
      </Link>
    </>
  )
}

export default Logo
