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

      state.cartTotalQuantity += 1;
      state.cartTotalAmount += action.payload.price;
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
          state.productList.push({ id, quantity: 1 });
          state.cartTotalQuantity += 1;
        }
      } else {
        if (operation === "add") {
          existingProduct.quantity += 1;
          state.cartTotalQuantity += 1;
        } else if (operation === "remove" && existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
          state.cartTotalQuantity -= 1;
        } else if (operation === "remove" && existingProduct.Quantity === 1) {
          state.productList = state.productList.filter(
            (item) => item.id !== action.payload.id
          );
          state.cartTotalQuantity -= 1;
        }
      }
    },

    clearCart: (state) => {
      state.productList = [];
      state.cartTotalQuantity = 0;
      state.cartTotalAmount = 0;
    },
  },
});

export const { addToCart, removeItem, Quantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
