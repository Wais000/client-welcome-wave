import { combineReducers } from 'redux';
import accommodationsReducer from '../accommodations/accommodationSlice';
// import helpsReducer from '../accommodations/help';
import jobsReducer from '../jobs/jobSlice';
import usersReducer from '../users/usersSlice';

const rootReducer = combineReducers({
  accommodations: accommodationsReducer,
//   helps: helpsReducer,
  jobs: jobsReducer,
  users: usersReducer,
});

export default rootReducer;
