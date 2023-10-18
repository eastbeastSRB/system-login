import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/slice'
// import { apiSlice } from './slices/apiSlice';

const store = configureStore({
  reducer: {
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;