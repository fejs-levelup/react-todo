import React, { Component } from "react";

import Controlls from "../../components/Controlls";

export default class Project extends Component {
  render() {
    const {
      projectId, title,
      removeProject
    } = this.props;

    return (
      <div>
        <h3>{title}</h3>

        <Controlls
          removeProject={removeProject}
          projectId={projectId}
        />
      </div>
    );
  }
}
