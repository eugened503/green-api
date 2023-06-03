import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './toolkitReducer';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
})