import React from "react";

export default function AddProject({
  projectTitle: title,
  updateTitle: onChange,
  addNewProject: createProject
}) {
  return (
    <div className="appProjectForm">
      <input
        type="text"
        placeholder="Project's title"
        value={title}
        onChange={onChange}
      />
      <button onClick={createProject}>Add new project</button>
    </div>
  );
}
