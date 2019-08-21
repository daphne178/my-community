import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ProjectDetails = (props) => {
  const { project, auth } = props

  if(!auth.uid){
    return <Redirect to='/signin' />
  }

  if(project){
    return (
    <div className="box-detail">
      <div className="box">
        <div>
          <span className="title is-4">{project.title}</span>
          <p>{project.content}</p>
        </div>
        <div>
          <div className="subtitle is-5">Posted by {project.authorFirstName} {project.authorLastName}</div>
          <div>{moment(project.createdAt.toDate()).calendar()}</div>
        </div>
      </div>
    </div>
    )
  } else {
    return (
      <div>
        <p>Loading Project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails)
