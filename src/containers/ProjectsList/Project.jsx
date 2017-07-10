import React, { Component } from "react";

import Controlls from "../../components/Controlls";

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      editableTitle: props.title
    };

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSaveTitle = this.onSaveTitle.bind(this);
    this.onRemoveProject = this.onRemoveProject.bind(this);
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

  onSaveTitle() {
    const {
      projectId, saveTitle
    } = this.props;

    this.toggleEditMode();
    saveTitle(projectId, this.state.editableTitle);
  }

  onRemoveProject() {
    const {
      projectId,
      removeProject
    } = this.props;

    removeProject(projectId);
  }

  render() {
    const {
      title
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
          removeProject={this.onRemoveProject}
          editMode={editMode}
          toggleEditMode={this.toggleEditMode}
          onCancel={this.onCancel}
          saveTitle={this.onSaveTitle}
        />
      </div>
    );
  }
}
