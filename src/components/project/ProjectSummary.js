import React from 'react'

const ProjectSummary = ({project}) => {
  return (
    <div>

      <div>
        <span>{project.title}</span>
        <p>Posted by auther</p>
        <p>Date</p>
      </div>

    </div>
  )
}

export default ProjectSummary
