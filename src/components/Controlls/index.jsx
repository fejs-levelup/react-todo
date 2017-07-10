import React from "react";

import Edit from "./Edit";
import Remove from "./Remove";
import Save from "./Save";
import Cancel from "./Cancel.jsx";
import ActionButton from "./ActionButton";
import {
  CancelIcon,
  EditIcon,
  RemoveIcon,
  SaveIcon
} from "../Icons";

export default function Controlls({
  removeProject,
  editMode,
  toggleEditMode,
  onCancel,
  saveTitle
}) {

  const ActionButtons = editMode ?
    [
      <ActionButton
        onClick={saveTitle}
        buttonClass="actionButton"
      >
        <SaveIcon />
      </ActionButton>,
      <ActionButton
        onClick={onCancel}
        buttonClass="actionButton"
      >
        <CancelIcon />
      </ActionButton>
    ] :
    <ActionButton
      onClick={toggleEditMode}
      buttonClass="actionButton"
    >
      <EditIcon />
    </ActionButton>

  return (
    <div className="projectControls">
      {ActionButtons}

      <ActionButton
        onClick={removeProject}
        buttonClass="actionButton"
      >
        <RemoveIcon />
      </ActionButton>
    </div>
  );
}

export { Edit, Remove, Save, Cancel };
