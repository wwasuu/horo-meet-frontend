import { createStore, compose, combineReducers } from "redux";

const user_set = (payload) => ({
  type: "USER/SET",
  payload,
});

const user_clear = () => ({
  type: "USER/CLEAR",
});

const initialUserState = {
  good_element: [],
  bad_element: [],
  element_name: "",
  occupation: "",
  sleep_bed: "",
  work_desk: "",
  color: "",
  activity: "",
};

const user = (state = initialUserState, action) => {
  switch (action.type) {
    case "USER/SET":
      return action.payload;
    case "USER/CLEAR":
      return initialUserState;
    default:
      return { ...state };
  }
};

const rootReducer = combineReducers({
  user,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;

export { user_set, user_clear };
