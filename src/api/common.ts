import { getStorage } from "@/util/storage";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: `Bearer ${getStorage("ACCESS_TOKEN")}`,
  },
});

api.interceptors.request.use(
  (instance) => {
    return instance;
  },
  (error) => {
    throw new Error(error);
  },
);
api.interceptors.response.use(
  (instance) => {
    return instance;
  },
  (error) => {
    throw new Error(error);
  },
);

export default api;
