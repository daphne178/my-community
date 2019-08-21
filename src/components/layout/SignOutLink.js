import React from 'react'
import { NavLink } from 'react-router-dom'

const SignOutLink = () => {
  return (
    <div className="navbar-item">
      <div className="button is-primary link-button">
        <NavLink to='/signup' className="has-text-white">Sign Up</NavLink>
      </div>
      <div className="button is-success link-button ">
        <NavLink to='/signin' className="has-text-white">Login</NavLink>
        </div>
    </div>
  )
}

export default SignOutLink
