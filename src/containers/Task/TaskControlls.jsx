import React, { Component } from "react";
import { connect } from "react-redux";

import { RemoveIcon } from "../../components/Icons";
import {
  Edit, Save, Cancel
} from "../../components/Controlls";
import { removeTask } from "../../actions/tasks";

class TaskControlls extends Component {
  constructor(props) {
    super(props);
    
    this.removeTask = this.removeTask.bind(this);
  }

  removeTask() {
    const {
      taskId,
      onRemoveTask
    } = this.props;

    onRemoveTask(taskId);
  }

  render() {
    const {
      switchEditMode,
      isEditEnabled,
      onCancelEdit,
      onSaveTitle
    } = this.props;

    const EditControlls = isEditEnabled ?
      [
        <Save
          key="save"
          onClick={onSaveTitle}
        />,
        <Cancel
          key="cancel"
          onClick={onCancelEdit}
        />
      ] :
      <Edit
        onClick={switchEditMode}
      />

    return (
      <span>
        {EditControlls}

        <button
          onClick={this.removeTask}
        >
          <RemoveIcon />
        </button>
      </span>
    );
  }
}

const mapDispatch = dispatch => ({
  onRemoveTask(id) {
    dispatch(removeTask(id));
  }
});

export default connect(null, mapDispatch)(TaskControlls);
