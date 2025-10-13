import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string;
  [key: string]: any;
}

interface RecentlyViewedState {
  viewedProducts: Product[];
  maxViewedProducts: number;
}

const initialState: RecentlyViewedState = {
  viewedProducts: [],
  maxViewedProducts: 5,
};

const recentlyViewedSlice = createSlice({
  name: "recentlyViewed",
  initialState,

  reducers: {
    addRecentlyViewed: (state, action: PayloadAction<Product>) => {
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
