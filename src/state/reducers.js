// reducers.js
import { combineReducers } from 'redux';

const emailReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return action.payload;
    default:
      return state;
  }
};

const roleReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_ROLE':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  email: emailReducer,
  role: roleReducer,
});

export default rootReducer;
