import React from 'react'
import { NavLink } from 'react-router-dom'

const SignOutLink = () => {
  return (
    <div className="navbar-item">
      <div className="button is-primary"><NavLink to='/signup'>Sign Up</NavLink></div>
      <div className="button is-success"><NavLink to='/signin'>Login</NavLink></div>
    </div>
  )
}

export default SignOutLink
