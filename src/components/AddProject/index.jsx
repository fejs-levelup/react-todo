import React from "react";
import { connect } from "react-redux";

function AddProject({
  title,
  onChange,
  createProject
}) {
  return (
    <div className="appProjectForm">
      <input
        type="text"
        placeholder="Project's title"
        value={title}
        onChange={onChange}
      />
      <button
        onClick={() => { createProject(title); }}
      >
        Add new project
      </button>
    </div>
  );
}

const mapState = ({ projectTitle }) => ({
  title: projectTitle
});

const mapDispatch = dispatch => ({
  onChange(ev) {
    dispatch({
      type: "EDIT_TITLE",
      title: ev.target.value
    });
  },
  createProject(title) {
    dispatch({ type: "ADD_PROJECT", title });
    dispatch({ type: "CLEAR_TITLE" });
  }
});

AddProject = connect(mapState, mapDispatch)(AddProject);

export default AddProject
