import axios from "axios";
import { storage } from "utils";
import { BASE_URL, ENDPOINTS } from "constants/constants";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(
  (config) => {
    const token = storage.get("token");

    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const getProfile = () => {
  return instance.get(ENDPOINTS.profile);
};

export const login = (data) => {
  return instance.post(ENDPOINTS.login, data);
};

export const register = (data) => {
  return instance.post(ENDPOINTS.singUp, data);
};

export const getAllTours = () => {
  return instance.get(ENDPOINTS.tours);
};

export const getAllUsers = () => {
  return instance.get(ENDPOINTS.users);
};
