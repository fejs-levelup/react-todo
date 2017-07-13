const defaultState = [];

export const tasks = (state, action) => {
  const { type } = action;

  switch(type) {
    case "ADD_TASK":
      return addTask(state, action);
    case "EDIT_TITLE":
      return editTitle(state, action);
    case "REMOVE_TASK":
      return removeTask(state, action);
    case "COMPLETE_TASK":
      return completeTask(state, action);
    case "CHANGE_ORDER":
      return changeOrder(state, action);
    default:
      return state;
  }
};
