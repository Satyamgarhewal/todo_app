let taskDetails = {
  tasks: [],
};
const taskReducer = (state = taskDetails, action) => {
  switch (action.type) {
    case "ADD TASK": {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};

export default taskReducer;
