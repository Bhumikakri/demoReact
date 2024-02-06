import { configureStore } from '@reduxjs/toolkit';
import codeReducer from './Slice';


const store = configureStore({
  reducer: {
    code: codeReducer,
  },
});

export default store;