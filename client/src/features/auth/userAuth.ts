import { apiAuth, apiUser } from "../../api/apiAction";

export const authUser = (email: string, password: string) => {
  const userData = {
    Email: email,
    Password: password,
  };
  return apiAuth(userData);
};

export const getUserData = async () => {
  return await apiUser({});
};
