import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import Controlls from "../../components/Controlls";
import { updateTitle, removeProject } from "../../actions/projects";
import Tasks from "../Tasks";

class ProjectPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      editableTitle: props.title
    };
  }

  render() {
    const {
      title,
      projectId,
    } = this.props;

    const { editMode, editableTitle } = this.state;

    const Title = editMode ?
      <input
        type="text"
        value={editableTitle}
        onChange={() => {}}
      /> :
      <h3>{title}</h3>;

    return (
      <div>
        <div className="projectContainer">
          {Title}

          <Controlls
            editMode={editMode}
            toggleEditMode={() => {}}
            onCancel={() => {}}
            saveTitle={() => { }}
            removeProject={() => { }}
          />
        </div>

        <Tasks
          projectId={projectId}
        />
      </div>
    )
  }
}

const mapState = ({
  projects
}, { match }) => {
  const { id: projectId } = match.params;
  const { title } = projects.find(project => project.id === Number.parseInt(projectId, 10));

  return {
    projectId,
    title
  };
};

export default connect(mapState)(ProjectPage);
