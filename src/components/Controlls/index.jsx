import React from "react";

import Edit from "./Edit";
import Remove from "./Remove";

export default function Controlls({
  removeProject,
  projectId
}) {
  return (
    <div className="projectControls">
      <Edit />
      <Remove
        removeProject={removeProject}
        projectId={projectId}
      />
    </div>
  );
}

export { Edit, Remove };
