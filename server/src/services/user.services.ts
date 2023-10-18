import User from "../model/user.model";

export function createUser(data: any) {
  console.log('into create user service');
  return User.create(data);
}
