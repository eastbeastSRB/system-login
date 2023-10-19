import User from "../model/user.model";

export function createUser(data: any) {
  return User.create(data);
}
