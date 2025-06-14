import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8001/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  // console.log(token);
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
});

export default api;
