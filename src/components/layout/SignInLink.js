import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignInLink = (props) => {
  return (
    <div className="navbar-item">
      <div className="button is-primary"><NavLink to='/create-project' >New Project</NavLink></div>
      <div className="button is-success" onClick={props.signOut}>Log Out</div>
      <div className="button is-danger"><NavLink to='/'>{props.profile.initials}</NavLink></div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
 return {
   signOut: () => dispatch(signOut())
 }
}

export default connect(null, mapDispatchToProps)(SignInLink)
