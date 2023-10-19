export interface IUser {
  id?: string | null;
  firstName?: string;
  lastName?: string;
  email?: string;
}
export interface IUserState {
  token: string | null;
  firstName?: string;
  lastName?: string;
}

export type LoginInputs = {
  email: string;
  password: string;
};

export type SignInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmedPassword: string;
}