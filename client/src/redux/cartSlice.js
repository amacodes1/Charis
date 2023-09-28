import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productList: [],
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      // state.cartItems.push(action.payload);
      const check = state.productList.find((x) => x.id === action.payload.id);
      if (!check) {
        state.productList = [...state.productList, action.payload];
      }
    },

    removeItem: (state, action) => {
      return state.filter((x) => x.id !== action.payload);
    },

    Quantity: (state, action) => {
      const { id, operation } = action.payload;
      const existingProduct = state.productList.find(
        (x) => x.id === action.payload.id
      );

      if (!existingProduct) {
        if (operation === "add") {
          state.productList.push({ id, Quantity: 1 });
        }
      } else {
        if (operation === "add") {
          existingProduct.Quantity += 1;
        } else if (operation === "remove" && existingProduct.Quantity > 1) {
          existingProduct.Quantity -= 1;
        } else if (operation === "remove" && existingProduct.Quantity === 1) {
          state.productList = state.productList.filter(
            (x) => x.id === action.payload.id
          );
        }
      }
    },
  },
});

export const { addToCart, removeItem, Quantity } = cartSlice.actions;
export default cartSlice.reducer;
