import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Dashboard from './dashboard/Dashboard'
import ProjectDetails from './project/ProjectDetails'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import CreateProject from './project/CreateProject'
import UserProjects from './project/UserProjects'
import UpdateProject from './project/UpdateProject'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="navbar-stay">
            <Navbar />
          </div>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/user/:id' component={UserProjects} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create-project' component={CreateProject} />
            <Route path='/update/:id' component={UpdateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
