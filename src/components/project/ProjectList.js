import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
  return (
    <div>
      { projects && projects.map(project => {
        return (
          <div className="project-list-box" key={project.id}>
            <div className="box" key={project.id}>
              <Link to={`/project/${project.id}`} key={project.id}>
                <ProjectSummary project={project} key={project.id}/>
              </Link>
            </div>
          </div>
        )
      })}
      <div className="project-list-box">
            <div className="box">
              <p>SignUp/Login to create a new project :)</p>
            </div>
          </div>
    </div>
  )
}

export default ProjectList
