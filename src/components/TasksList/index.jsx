import React, { Component } from "react";
import { connect } from "react-redux";

class TasksList extends Component {
  render() {
    const { tasksList } = this.props;
    const tasks = tasksList.map(task => (
      <div key={task.id}>{task.title}</div>
    ));

    return (
      <div className="tasksList">
        {tasks}
      </div>
    );
  }
}

const mapState = ({ tasks }, { projectId }) => ({
  tasksList: tasks.filter(task => task.project === projectId)
});

export default connect(mapState)(TasksList);
