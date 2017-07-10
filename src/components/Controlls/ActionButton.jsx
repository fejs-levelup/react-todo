import React from "react";

export default function ActionButton({
  onClick,
  children,
  buttonClass
}) {
  return (
    <button
      onClick={onClick}
      className={buttonClass}
    >
      {children}
    </button>
  );
}
