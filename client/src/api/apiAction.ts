import axios from "axios";
// import { api } from "./api";

export const userApiUrl = '/users/v1';
export const authApiUrl = '/users/v1/auth';
export const logoutApiUrl = '/users/v1/logout'


// didn't used this methods, some idea how it can be structured when app start to grow
export const apiUser = async (params: any = {}) => {
  try {
    return await axios.get(`${userApiUrl}`, params);
  } catch (e: any) {
    if (axios.isAxiosError(e)) {
      return e.response?.data;
    }
    return e;
  }
};

export const apiAuth = async (params: any = {}) => {
  try {
    return await axios.post(`${authApiUrl}`, params);
  } catch (e: any) {
    if (axios.isAxiosError(e)) {
      return e.response?.data;
    }
    return e;
  }
};
