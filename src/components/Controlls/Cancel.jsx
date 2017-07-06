import React from "react";

export default function Cancel({ onClick }) {
  return (
    <button
      className="cancelButton"
      onClick={onClick}
    >
      <svg height="24px"viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
        <path d="M12,4c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S16.411,4,12,4z M7,12c0-0.832,0.224-1.604,0.584-2.295l6.711,6.711  C13.604,16.776,12.832,17,12,17C9.243,17,7,14.757,7,12z M16.416,14.295L9.705,7.584C10.396,7.224,11.168,7,12,7  c2.757,0,5,2.243,5,5C17,12.832,16.776,13.604,16.416,14.295z"/>
      </svg>
    </button>
  );
}