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
    this.props.history.push('/')
  }

  render() {

    const { auth } = this.props

    if(!auth.uid){
      return <Redirect to='/signin' />
    }

    return (
      <div className="new-project-box">
        <div className="new-project box">
          <div className="field">
            <form onSubmit={this.handleSubmit}>
              <h5 className="title is-5">Create New Project</h5>
              <div>
                <label className="label" htmlFor='title'>Title</label>
                <input className="input" type='text' id='title' onChange={this.handleChange}/>
              </div>
              <br></br>
              <div>
                <label className="label" htmlFor='content'>Project Content</label>
                <textarea className="textarea" id='content' onChange={this.handleChange}/>
              </div>
              <div>
                <button className="button is-link">Create</button>
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
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
