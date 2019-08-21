import React from 'react'
import { NavLink } from 'react-router-dom'

const SignOutLink = () => {
  return (
    <div className="navbar-item">
      <a><NavLink to='/signup'>Sign Up</NavLink></a>
      <a><NavLink to='/signin'>Login</NavLink></a>
    </div>
  )
}

export default SignOutLink
