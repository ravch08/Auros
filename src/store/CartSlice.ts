import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "cart/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    return data;
  },
);

const initialState = {
  cart: [],
  items: [],
  wishlist: [],
  quantity: 0,
  isError: false,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const elIdx = state?.cart.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (elIdx >= 0) {
        state.cart[elIdx].quantity += 1;
      } else {
        const cartItem = { ...action.payload, quantity: 1 };
        state.cart.push(cartItem);
      }
    },
    addToWishlist(state, action) {
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export const { addToCart, addToWishlist, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
