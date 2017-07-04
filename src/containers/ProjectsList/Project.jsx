import React, { Component } from "react";

export default class Project extends Component {
  render() {
    const {
      projectId, title
    } = this.props;

    return (
      <div>{title}</div>
    );
  }
}
