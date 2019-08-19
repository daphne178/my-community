import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createProject(this.state)
  }

  render() {

    const { auth } = this.props

    if(!auth.uid){
      return <Redirect to='/signin' />
    }

    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <h5>Create New Project</h5>
            <div>
              <label htmlFor='title'>Title</label>
              <input type='text' id='title' onChange={this.handleChange}/>
            </div>
            <div>
              <label htmlFor='content'>Project Content</label>
              <textarea id='content' onChange={this.handleChange}/>
            </div>
            <div>
              <button>Create</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
