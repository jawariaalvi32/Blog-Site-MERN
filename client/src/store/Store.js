import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/UserSlice';
import postReducer from './slices/BlogSlice';


export default  configureStore({
  reducer: {
    user: userReducer,
    // todo: todoReducer,
    post: postReducer
  },
});