import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

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
    console.log(this.state)
  }

  render() {

    const { auth } = this.props

    if(auth.uid){
      return <Redirect to='/' />
    }

    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <h5>Sign Up</h5>
            <div>
              <label htmlFor='firstName'>First Name</label>
              <input type='text' id='firstName' onChange={this.handleChange}/>
            </div>
            <div>
              <label htmlFor='lastName'>Last Name</label>
              <input type='text' id='lastName' onChange={this.handleChange}/>
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' onChange={this.handleChange}/>
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' onChange={this.handleChange}/>
            </div>
            <div>
              <button>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}


export default connect(mapStateToProps)(SignUp)
