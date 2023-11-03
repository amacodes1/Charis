import { createSlice } from "@reduxjs/toolkit";

const recentlyViewedSlice = createSlice({
  name: "recentlyViewed",
  initialState: {
    viewedProducts: [],
    maxViewedProducts: 5,
  },

  reducers: {
    addRecentlyViewed: (state, action) => {
      state.viewedProducts.unshift(action.payload);

      // Limit the number of viewed products to the 5 newest ones
      if (state.viewedProducts.length > state.maxViewedProducts) {
        state.viewedProducts.pop();
      }
    },
  },
});

export const { addRecentlyViewed } = recentlyViewedSlice.actions;
export default recentlyViewedSlice.reducer;
