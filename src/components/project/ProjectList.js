import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
  return (
    <div>
      { projects && projects.map(project => {
        return (
          <div className="project-list-box">
            <div className="box">
              <Link to={`/project/${project.id}`}>
                <ProjectSummary project={project} key={project.id}/>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectList
