import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signUp(this.state)
  }

  render() {

    const { auth, authError } = this.props

    if(auth.uid){
      return <Redirect to='/' />
    }

    return (
      <div className="signin-page">
        <div className="box">
          <div className="field signin-box">
            <form onSubmit={this.handleSubmit}>
              <h5 className="title is-5">Sign Up</h5>
              <div>
                <label className="label" htmlFor='firstName'>First Name</label>
                <input className="input" type='text' id='firstName' onChange={this.handleChange}/>
              </div>
              <div>
                <label className="label" htmlFor='lastName'>Last Name</label>
                <input className="input" type='text' id='lastName' onChange={this.handleChange}/>
              </div>
              <div>
                <label className="label" htmlFor='email'>Email</label>
                <input className="input" type='email' id='email' onChange={this.handleChange}/>
              </div>
              <div>
                <label className="label" htmlFor='password'>Password</label>
                <input className="input" type='password' id='password' onChange={this.handleChange}/>
              </div>
              <div>
                <button className="button is-link">Sign Up</button>
                <div> { authError ? <p>{authError}</p> : null } </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
