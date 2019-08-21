import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
  state = {
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
    console.log(this.state)
    this.props.signIn(this.state)
  }

  render() {

    const { authError, auth } = this.props

    if(auth.uid){
      return <Redirect to='/' />
    }

    return (
      <div className="signin-page">
        <div className="box">
          <div className="field signin-box">
            <form onSubmit={this.handleSubmit}>
              <h5 className="title is-5">Login</h5>
              <div>
                <label htmlFor='email' className="label">Email</label>
                <input className="input" type='email' id='email' onChange={this.handleChange}/>
              </div>
              <div>
                <label htmlFor='password' className="label">Password</label>
                <input className="input" type='password' id='password' onChange={this.handleChange}/>
              </div>
              <div>
                <button className="button is-link">Login</button>
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
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credential) => dispatch(signIn(credential))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
