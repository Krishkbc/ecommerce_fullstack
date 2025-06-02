import api from "../../backend/services/api";
import axios from "axios";

export const addToCart = (userData) => {
  console.log("api userdata", userData);
  return api.post("http://localhost:8001/api/cart/add", userData);
};

export const showCartItems = () => {
  return api.get("http://localhost:8001/api/cart/show");
};
