import React from "react";

import Edit from "./Edit";
import Remove from "./Remove";
import Save from "./Save";
import Cancel from "./Cancel.jsx";

export default function Controlls({
  removeProject,
  projectId,
  editMode,
  toggleEditMode,
  onCancel
}) {
  const EditControlls = editMode ?
    <div>
      <Save />
      <Cancel onClick={onCancel} />
    </div> :
    <Edit onClick={toggleEditMode}/>;

  return (
    <div className="projectControls">
      {EditControlls}
      <Remove
        removeProject={removeProject}
        projectId={projectId}
      />
    </div>
  );
}

export { Edit, Remove, Save, Cancel };
