// schema to validate a user
import { object, string, TypeOf } from 'zod';

export const createUserSchema = object({
  body: object({
    firstName: string({
      required_error: 'FirstName is required',
    }),
    lastName: string({
      required_error: 'LastName is required',
    }),
    password: string({
      required_error: 'Password is required',
    }).min(6, 'Password is too short - minimum 6 characters'),
    // passwordConfirmation: string({
    //   required_error: 'Password confirmation is required',
    // }),
    email: string({
      required_error: 'Email is required',
    }).email('Email is not valid'),
  })
//   .refine((data: any) => data.password === data.passwordConfirmation, {
//     message: 'Passwords do not match',
//   }),
});

export type UserSchema = TypeOf<typeof createUserSchema>['body'];