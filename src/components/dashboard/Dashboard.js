import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../project/ProjectList'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render(){
    // console.log(this.props)
    const { projects } = this.props
    return (
      <div>
        <div>
          <ProjectList projects={projects} />
        </div>
        <div>
          <Notifications />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard)
