import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUserState {
  token: string | null;
  firstName?: string;
  lastName?: string;
}

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
    }
  },
});

export const { removeToken, storeToken, setUser } = userDataSlice.actions;

export default userDataSlice.reducer;
