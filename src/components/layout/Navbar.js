import React from 'react'
import { Link } from 'react-router-dom'
import SignInLink from './SignInLink'
import SignOutLink from './SignOutLink'
import { connect } from 'react-redux'


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

const mapStateToProps = (state) => {
  console.log(state)
  return {

  }
}

export default connect(mapStateToProps)(Navbar)
