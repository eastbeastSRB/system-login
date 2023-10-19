import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState  } from '../types/user.interface';

const initialState: IUserState = {
  token: null,
  firstName: '',
  lastName: '',
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    removeToken: (state) => {
      state.token = null;
    },
    storeToken: (state: any, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state: any, action: any) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      /*** didn't cover all user attr values, for assignment purpose get only first and last name
       * in order to show it on profile page ***/
    }
  },
});

export const { removeToken, storeToken, setUser } = userDataSlice.actions;

export default userDataSlice.reducer;
