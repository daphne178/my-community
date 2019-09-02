import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import firebase from '../../config/fbConfig'

class ProjectDetails extends Component {

  state = {
    redirect: false,
    projectId: this.props.match.params.id
  }

  setRedirect = () => {
    firebase.firestore().collection('projects').doc(this.state.projectId).delete()
      .then(() => {
        console.log("Document successfully deleted!");
        this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  render(){
    const { project, auth } = this.props
    const projectId = this.props.match.params.id

    // if(!auth.uid){
    //   return <Redirect to='/signin' />
    // }

    // if(this.state.redirect){
    //   return <Redirect to='/' />
    // }

    if(project && auth.uid === project.authorId){
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
            <div>
              {this.renderRedirect()}
              <button onClick={this.setRedirect}>Delete</button>
            </div>
          </div>
        </div>
      )
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
          </div>const { auth } = this.props
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
