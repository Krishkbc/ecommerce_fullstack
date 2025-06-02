import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartReducer";
import wishlistReducer from "./WishListReducer";
import { createLogger } from "redux-logger";

const logger = createLogger({
  collapsed: true,
  timestamp: false,
});

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
