import { configureStore } from '@reduxjs/toolkit';
import accommodationsReducer from '../features/accommodations/accommodationSlice';
import jobsReducer from '../features/helps/helpSlice';
import helpsReducer from '../features/helps/helpSlice';
import usersReducer from '../features/users/usersSlice';
import messagesReducer from '../features/messages/messagesSlice';

const store = configureStore({
  reducer: {
    accommodations: accommodationsReducer,
    jobs: jobsReducer,
    helps: helpsReducer,
    users: usersReducer,
    messages: messagesReducer,
  },
});

export default store;
