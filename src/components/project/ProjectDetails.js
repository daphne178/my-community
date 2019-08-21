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
      <div className="box detail-box">
        <div>
          <span className="title is-4">{project.title}</span>
          <br/>
          <br/>
          <p className="is-1 has-text-black-ter">{project.content}</p>
        </div>
        <br/>
        <div>
          <div className="is-3 has-text-grey-dark">Posted by {project.authorFirstName} {project.authorLastName}</div>
          <div className="is-6 has-text-grey">{moment(project.createdAt.toDate()).calendar()}</div>
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
