import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import firebase from '../../config/fbConfig'

class EditProject extends Component {
  constructor(props){
    super(props)
    this.state = {
      key: '',
      title: '',
      content: ''
    }
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('projects').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          title: board.title,
          content: board.content,
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({board:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, content } = this.state;

    const updateRef = firebase.firestore().collection('projects').doc(this.state.key);
    updateRef.set({
      title,
      content
    }).then((docRef) => {
      this.setState({
        key: '',
        title: '',
        content: ''
      });
      this.props.history.push("/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {

    const { auth } = this.props
    const projectId = this.props.match.params.id
    const project = this.props.projects[projectId]
    console.log('UPDATE', this.props)

    if(!auth.uid){
      return <Redirect to='/signin' />
    }

    return (
      <div className="new-project-box">
        <div className="new-project box">
          <div className="field">
            <form onSubmit={this.handleSubmit}>
              <h5 className="title is-5">Update Project</h5>
              <div>
                <label className="label" htmlFor='title'>Title</label>
                <input className="input" type='text' id='title' value={project.title} onChange={this.onChange}/>
              </div>
              <br/>
              <div>
                <label className="label" htmlFor='content'>Project Content</label>
                <textarea className="textarea" id='content' onChange={this.onChange}>{project.content}</textarea>
              </div>
              <div>
                <button className="button is-link">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // const id = ownProps.match.params.id
  // const projects = state.firestore.data.projects
  // const project = projects ? projects[id] : null
  return {
    // project: project,
    auth: state.firebase.auth,
    projects: state.firestore.data.projects
  }
}

export default connect(mapStateToProps)(EditProject)
