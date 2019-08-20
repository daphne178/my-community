import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
  return (
    <div>

      <div>
        <span>{project.title}</span>
        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
        <p>Created at {moment(project.createdAt.toDate()).calendar()}</p>
      </div>

    </div>
  )
}

export default ProjectSummary
