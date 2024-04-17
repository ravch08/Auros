import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartProps, ProductsProps } from "../components/utils/api";

const initialState = {
  cart: [],
  wishlist: [],
  totalPrice: 0,
  totalCartQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ProductsProps>) {
      const elIdx = state?.cart.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (elIdx !== -1) {
        state.cart[elIdx].quantity += 1;
      } else {
        const cartItem = { ...action.payload, quantity: 1 };
        state.cart.push(cartItem);
      }
    },

    addToWishlist(state, action: PayloadAction<CartProps>) {
      const elIdx = state?.wishlist.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (elIdx >= 0) {
        state.wishlist[elIdx].quantity += 1;
      } else {
        const cartItem = { ...action.payload, quantity: 1 };
        state.wishlist.push(cartItem);
      }
    },

    deleteFromCart: (state, action: PayloadAction<CartProps>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    getCartTotal: (state) => {
      let totalPrice = 0;
      let totalCartQuantity = 0;

      state.cart.forEach((cartItem) => {
        const { price, quantity } = cartItem;
        const itemTotal = quantity * price;
        totalPrice += itemTotal;
        totalCartQuantity += quantity;
      });

      state.totalCartQuantity = totalCartQuantity;
      state.totalPrice = parseFloat(totalPrice.toFixed(2));
    },

    incrementQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },

    decrementQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
  },
});

export const {
  addToCart,
  addToWishlist,
  deleteFromCart,
  getCartTotal,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
