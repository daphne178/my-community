import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
  return (
    <div>
      { projects && projects.map(project => {
        return (
          <Link to={`/project/${project.id}`}>
          <ProjectSummary key={project.id} project={project}/>
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectList
