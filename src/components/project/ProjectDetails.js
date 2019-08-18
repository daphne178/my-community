import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id
  return (
    <div>
      <div>
        <div>
          <span>Project Title {id}</span>
          <p>Lorem ipsum dolor</p>
        </div>
        <div>
          <div>Posted by Auther</div>
          <div>Date</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
