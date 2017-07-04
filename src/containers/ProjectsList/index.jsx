import React, { Component } from "react";

import Project from "./Project";

export default class ProjectsList extends Component {
  render() {
    const projectsList = this.props.projects.map(project => (
        <Project
          key={project.id}
          projectId={project.id}
          title={project.title}
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
