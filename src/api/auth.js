import axios from "axios";

const API_BASE_URL = "http://localhost:8001/api";

export const register = async (userData) => {
  return axios.post(`${API_BASE_URL}/register`, userData);
};

export const login = async (credentials) => {
  console.log(credentials);
  return axios.post(`${API_BASE_URL}/login`, credentials);
};
