import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails = (props) => {
  const { project } = props
  if(project){
    return (
    <div>
      <div>
        <div>
          <span>{project.title}</span>
          <p>{project.content}</p>
        </div>
        <div>
          <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
          <div>Date</div>
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
  // console.log(state)
  const id = ownProps.match.params.id
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  return {
    project: project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails)
