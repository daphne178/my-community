import React, { Component } from 'react'
import ProjectList from '../project/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    const { projects, auth } = this.props

    if(!auth.uid){
      return <Redirect to='/signin' />
    }　else {
      return (
        <div>
          <div>
            <div>
              <ProjectList projects={projects} />
            </div>
            <div>
              <Notifications />
            </div>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard)
