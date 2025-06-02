import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const wishListSlice = createSlice({
  initialState: initialState,
  name: "wishlist",
  reducers: {
    toggleWishlist: (state, actions) => {
      const item = actions.payload;
      const existing = state.items.find((i) => i.id === item.id);

      if (!existing) {
        state.items.push(item);
        console.log(state.items)
      }
    },
  },
});

export const { toggleWishlist } = wishListSlice.actions;

export default wishListSlice.reducer;
