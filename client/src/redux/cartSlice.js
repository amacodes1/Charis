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
      const itemInCart = state.productList.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.productList.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const removeItem = state.productList.filter(
        (item) => item.id !== action.payload
      );
      state.productList = removeItem;
    },

    Quantity: (state, action) => {
      const { id, operation } = action.payload;
      const existingProduct = state.productList.find(
        (item) => item.id === action.payload.id
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
            (item) => item.id === action.payload.id
          );
        }
      }
    },
  },
});

export const { addToCart, removeItem, Quantity } = cartSlice.actions;
export default cartSlice.reducer;
