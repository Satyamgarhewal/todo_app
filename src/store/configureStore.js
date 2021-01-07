import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import taskReducer from "../reducers/taskReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      tasksDetails: taskReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
