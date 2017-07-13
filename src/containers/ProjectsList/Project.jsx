import React, { Component } from "react";
import { connect } from "react-redux";

import Controlls from "../../components/Controlls";
import { updateTitle, removeProject } from "../../actions/projects";

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      editableTitle: props.title
    };

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  toggleEditMode() {
    const { editMode } = this.state;

    this.setState({
      editMode: !editMode
    });
  }

  onChange(ev) {
    this.setState({
      editableTitle: ev.target.value
    });
  }

  onCancel() {
    this.setState({
      editableTitle: this.props.title
    });

    this.toggleEditMode();
  }

  render() {
    const {
      title,
      projectId,
      removeProject,
      saveTitle
    } = this.props;

    const { editMode, editableTitle } = this.state;

    const Title = editMode ?
      <input
        type="text"
        value={editableTitle}
        onChange={this.onChange}
      /> :
      <h3>{title}</h3>;

    return (
      <div>
        {Title}

        <Controlls
          editMode={editMode}
          toggleEditMode={this.toggleEditMode}
          onCancel={this.onCancel}
          saveTitle={() => { saveTitle(projectId, editableTitle); }}
          removeProject={() => { removeProject(projectId); }}
        />
      </div>
    );
  }
}

const mapDispatch = dispatch => ({
  removeProject(id) {
    dispatch(removeProject(id));
  },
  saveTitle(id, title) {
    dispatch(updateTitle(id, title));
  }
});

Project = connect(null, mapDispatch)(Project);

export default Project;
