import React, { Component } from "react";

import Project from "./Project";

export default class ProjectsList extends Component {
  render() {
    const {
      projects,
      removeProject
    } = this.props;

    const projectsList = projects.map(project => (
        <Project
          key={project.id}
          projectId={project.id}
          title={project.title}
          removeProject={removeProject}
        />
      )
    );

    return (
      <div className="projectsList">
        {projectsList}
      </div>
    );
  }
}
