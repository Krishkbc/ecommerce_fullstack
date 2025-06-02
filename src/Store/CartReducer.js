import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart slice",
  initialState: initialState,
  reducers: {
    addToCart: (state, actions) => {
      const { item, quantity } = actions.payload;
      const existing = state.items.find((i) => i.id === item.id);

      if (existing) {
        const totalRequested = existing.quantity + quantity;

        if (totalRequested <= existing.stock) {
          existing.quantity = totalRequested;
          existing.stockRemaining = Math.max(
            existing.stock - totalRequested,
            0
          );
        } else {
          console.log("Not enough stock to fulfill this request.");
        }
      } else {
        const stockRemaining = Math.max(item.stock - quantity, 0);

        state.items.push({
          ...item,
          quantity,
          stockRemaining,
        });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
