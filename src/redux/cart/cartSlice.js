import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const productId = action.payload.id;
      state.items = state.items.filter((item) => item.id !== productId);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.items.find((item) => item.id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
  },
});

export const selectCartCount = (state) => state.cart.items.length;

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
