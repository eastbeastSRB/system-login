import UserModel from "../model/user.model";

export function createUser(data: any) {
  console.log('into create user service');
  return UserModel.create(data);
}
