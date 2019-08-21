import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
  return (
    <div>
      <p className="title is-4">{project.title}</p>
      <p className="is-3 has-text-grey-dark">
        Posted by {project.authorFirstName} {project.authorLastName}
      </p>
      <p className="is-6 has-text-grey">
        Created at {moment(project.createdAt.toDate()).calendar()}
      </p>
    </div>
  )
}

export default ProjectSummary
