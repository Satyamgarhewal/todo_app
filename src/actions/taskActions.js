export const addTask = (task) => {
  console.log(task);
  return async (dispatch) => {
    dispatch({
      type: "ADD TASK",
      payload: task,
    });
  };
};
