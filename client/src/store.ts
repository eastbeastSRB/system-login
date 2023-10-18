import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/slice'
import createApiSlice from './features/api/api';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [createApiSlice.reducerPath]: createApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;