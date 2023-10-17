// schema to validate a user
import { object, string, TypeOf } from 'zod';

interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmedPassword: string;
}

export const createUserSchema = object({
  body: object({
    firstName: string({
      required_error: 'FirstName is required',
    }),
    lastName: string({
      required_error: 'LastName is required',
    }),
    email: string({
        required_error: 'Email is required',
    }).email('Email is not valid'),
    password: string({
      required_error: 'Password is required',
    }).min(6, 'Password is too short - minimum 6 characters'),
    confirmedPassword: string({
      required_error: 'Password confirmation is required',
    }),
  }).refine((data: IUser) => data.password === data.confirmedPassword, {
    message: 'Passwords do not match',
  }),
});

export type UserSchema = TypeOf<typeof createUserSchema>['body'];