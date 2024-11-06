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
    removeFromCart: (state, action) => {
      const index = state.cart.indexOf(action.payload.item);
      console.log(index);

      state.cart.pop(index);
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
