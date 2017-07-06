import React, { Component } from 'react';
import './App.css';

import AddProject from "./components/AddProject";
import ProjectsList from "./containers/ProjectsList";

let idCount = 2;

class App extends Component {
  constructor() {
    super();

    this.state = {
      projects: [
        { id: 0, title: "First project" },
        { id: 1, title: "Second project" },
        { id: 2, title: "Another project" }
      ],
      projectTitle: ""
    };

    this.addNewProject = this.addNewProject.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.removeProject = this.removeProject.bind(this);
  }

  addNewProject() {
    const {
      projects,
      projectTitle
    } = this.state;

    projects.push({ id: ++idCount, title: projectTitle });

    this.setState({
      projects,
      projectTitle: ""
    });
  }

  updateTitle(ev) {
    this.setState({
      projectTitle: ev.target.value
    });
  }

  removeProject(id) {
    const { projects } = this.state;
    const _index = projects.findIndex(project => project.id === id);

    if(_index === undefined) return;

    this.setState({
      projects: [
        ...projects.slice(0, _index),
        ...projects.slice(_index + 1)
      ]
    });
  }

  render() {
    const { projects, projectTitle } = this.state;

    return (
      <div className="App">
        <AddProject
          projectTitle={projectTitle}
          updateTitle={this.updateTitle}
          addNewProject={this.addNewProject}
        />
        
        <ProjectsList
          projects={projects}
          removeProject={this.removeProject}
        />
      </div>
    );
  }
}

export default App;
