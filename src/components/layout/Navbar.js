import React from 'react'
import { Link } from 'react-router-dom'
import SignInLink from './SignInLink'
import SignOutLink from './SignOutLink'
import { connect } from 'react-redux'


const Navbar = (props) => {
  const { auth, profile } = props
  const links = auth.uid ? <SignInLink profile={profile}/> : <SignOutLink />
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div  className="navbar-brand">
        <Link to='/' className="title is-2">My Community</Link>
        <div  className="navbar-end">
          <div className="navbar-item">
          { links }
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
