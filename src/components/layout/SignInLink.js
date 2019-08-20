import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignInLink = (props) => {
  return (
    <div className="navbar-item">>
    <ul>
      <li><NavLink to='/create-project'>New Project</NavLink></li>
      <li><a onClick={props.signOut}>Log Out</a></li>
      <li><NavLink to='/'>{props.profile.initials}</NavLink></li>
    </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
 return {
   signOut: () => dispatch(signOut())
 }
}

export default connect(null, mapDispatchToProps)(SignInLink)
