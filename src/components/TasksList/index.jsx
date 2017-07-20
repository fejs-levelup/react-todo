import React, { Component } from "react";
import { connect } from "react-redux";

import Task from "../../containers/Task"

class TasksList extends Component {
  render() {
    const { tasksList } = this.props;
    const tasks = tasksList.map(task => (
      <Task
        key={task.id}
        taskId={task.id}
        title={task.title}
        completed={task.completed}
      />
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
