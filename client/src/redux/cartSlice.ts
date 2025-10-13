import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  price: number;
  quantity: number;
  [key: string]: any;
}

interface CartState {
  productList: CartItem[];
  cartItems: CartItem[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const initialState: CartState = {
  productList: [],
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ id: string; price: number; [key: string]: any }>) => {
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

    removeItem: (state, action: PayloadAction<string>) => {
      const removeItem = state.productList.filter(
        (item) => item.id !== action.payload
      );
      state.productList = removeItem;
    },

    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.productList.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },

    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.productList.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
          const index = state.productList.findIndex((item) => item.id === action.payload);
          state.productList.splice(index, 1);
        } else {
          item.quantity--;
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

export const {
  addToCart,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
