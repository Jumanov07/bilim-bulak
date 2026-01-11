import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15_000,
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    return Promise.reject(error);
  }
);
