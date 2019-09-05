import React, { Component } from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class UserProjects extends Component {
  render(){
    const { projects, auth } = this.props
    console.log('THIS', this.props)
    if(projects){
      return (
        <div>
          { projects && projects.map(project => {
            if(auth.uid === project.authorId){
              return (
                <div className="project-list-box">
                  <div className="box">
                    <Link to={`/project/${project.id}`} key={project.id}>
                      <ProjectSummary project={project} key={project.id}/>
                    </Link>
                  </div>
                </div>
              )
            // } else {
            //   return (
            //     <div className="project-list-box">
            //       <div className="box">
            //         <p>You haven't create any project yet!</p>
            //       </div>
            //     </div>
            //   )
            }
          })}
        </div>
      )
    } else {
      return (
            <div className="project-list-box">
              <div className="box">
                <p>You haven't create any project yet!</p>
              </div>
            </div>
          )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default connect(mapStateToProps)(UserProjects)

