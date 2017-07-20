import React from "react";

export default function TaskTitle({
  title,
  isEditEnabled,
  onTitleChanged
}) {
  const onChange = ev => onTitleChanged(ev.target.value);

  if(isEditEnabled) {
    return (
      <input
        type="text"
        value={title}
        onChange={onChange}
      />
    );
  }

  return (
    <span>{title}</span>
  );
}
