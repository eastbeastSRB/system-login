import axios from "axios";
// import { api } from "./api";

const authApiUrl = `localhost:5000/users/v1/auth`;
const userApiUrl = `localhost:5000/users/v1/`;

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
