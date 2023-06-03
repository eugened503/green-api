import { configureStore } from '@reduxjs/toolkit';
import userReducer from './toolkitReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})