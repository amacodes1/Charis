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

    incrementQuantity: (state, action) => {
      const item = state.productList.find((item) => item.id === action.payload);
      item.quantity++;
    },

    decrementQuantity: (state, action) => {
      const item = state.productList.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        const index = state.findIndex((item) => item.id === action.payload);
        state.splice(index, 1);
      } else {
        item.quantity--;
      }
    },

    clearCart: (state) => {
      state.productList = [];
      state.cartTotalQuantity = 0;
      state.cartTotalAmount = 0;
    },
  },
});

export const {
  addToCart,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
