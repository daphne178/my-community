import React from 'react'
import { Link } from 'react-router-dom'
import SignInLink from './SignInLink'
import SignOutLink from './SignOutLink'


const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to='/'>My Community</Link>
        <SignInLink />
        <SignOutLink />
      </div>
    </nav>
  )
}

export default Navbar
