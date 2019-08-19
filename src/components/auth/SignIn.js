import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

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
    const { authError } = this.props
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <h5>Sign In</h5>
            <div>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' onChange={this.handleChange}/>
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' onChange={this.handleChange}/>
            </div>
            <div>
              <button>Login</button>
              <div>
                { authError ? <p>{authError}</p> : null }
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credential) => dispatch(signIn(credential))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
