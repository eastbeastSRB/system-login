import { RootState } from '../store/store';

export const selectUserState = (state: RootState) => state.userData;
