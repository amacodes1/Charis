import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    allProduct: [],
    filteredProducts: "",
  },
  reducers: {
    setProducts: (state, action) => {
      state.allProduct = action.payload;
    },

    filterProducts: (state, action) => {
      try {
      } catch (err) {
        return err;
      }
    },
  },
});

export const { setProducts, filterProducts } = productSlice.actions;
export default productSlice.reducer;
