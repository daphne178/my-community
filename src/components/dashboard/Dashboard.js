import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../project/ProjectList'

class Dashboard extends Component {
  render(){
    return (
      <div>
        <div>
          <ProjectList />
        </div>
        <div>
          <Notifications />
        </div>
      </div>
    )
  }
}

export default Dashboard
