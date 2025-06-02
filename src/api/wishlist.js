import axios from "axios";
import api from "../../backend/services/api";

const API_BASE_URL = "http://localhost:8001/api";

export const addToWishlist = (userData) => {
  console.log("api userdata", userData);
  return api.post("http://localhost:8001/api/wishlist/add", userData);
};

export const showWishlist = () => {
  return api.get("http://localhost:8001/api/wishlist/show");
};
