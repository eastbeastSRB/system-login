import { createSlice } from '@reduxjs/toolkit';

export interface IUserState {
    userInfo: string | null;
}

const storedUserInfo = localStorage.getItem('userInfo');

const initialState: IUserState = {
    userInfo: storedUserInfo ? JSON.parse(storedUserInfo) : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    logoutUser: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
});

export const { setCredentials, logoutUser } = authSlice.actions;

export default authSlice.reducer;