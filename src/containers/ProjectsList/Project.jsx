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
      projectId, title,
      removeProject
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
          removeProject={removeProject}
          projectId={projectId}
          editMode={editMode}
          toggleEditMode={this.toggleEditMode}
          onCancel={this.onCancel}
        />
      </div>
    );
  }
}
