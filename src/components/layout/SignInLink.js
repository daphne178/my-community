import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

class SignInLink extends Component {
  render(){
    // console.log('SignIn', this.props)
    const { auth } = this.props
    return (
      <div className="navbar-item">
        <div className="button is-primary link-button">
          <NavLink to='/create-project' className="has-text-white">New Project</NavLink>
        </div>
        <div className="button is-success link-button" onClick={this.props.signOut}>Log Out</div>
        <div className="button is-danger link-button" >
          {/* <NavLink to={`/user/${auth.uid}`} className="has-text-white">{this.props.profile.initials}</NavLink> */}
          <NavLink to={`/`} className="has-text-white">{this.props.profile.initials}</NavLink>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

const mapDispatchToProps = (dispatch) => {
 return {
   signOut: () => dispatch(signOut())
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInLink)
