import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string;
  [key: string]: any;
}

interface ProductState {
  allProduct: Product[];
  filteredProducts: string;
}

const initialState: ProductState = {
  allProduct: [],
  filteredProducts: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.allProduct = action.payload;
    },

    filterProducts: (state, action: PayloadAction<string>) => {
      state.filteredProducts = action.payload;
    },
  },
});

export const { setProducts, filterProducts } = productSlice.actions;
export default productSlice.reducer;
