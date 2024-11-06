import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload.item);
    },
    removeFromCart: (state, initialState) => {
      state.value -= 1;
    },
  },
});

export const { addToCart, removeFromCart } = counterSlice.actions;

const store = configureStore({
  reducer: {
    cart: counterSlice.reducer,
  },
});

export default store;
