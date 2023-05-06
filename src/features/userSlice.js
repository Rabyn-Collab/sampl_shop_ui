import { createSlice } from "@reduxjs/toolkit";
import { cartCrud, clearAll, clearCart, getCart, getUser, setUser } from "./localstorage";


const initialState = {
  carts: getCart(),
  user: getUser()
};


export const cartSlice = createSlice({
  name: 'userInfo',
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      setUser(state.user);
    },
    addToCart: (state, action) => {
      const existItem = state.carts.find((a) => a.product === action.payload.product);
      if (!existItem) {
        state.carts.push(action.payload);
        cartCrud(state.carts);
      }

    },
    updateCart: (state, action) => {
      state.carts = state.carts.map((c) => c.product === action.payload.product ? action.payload : c);
      cartCrud(state.carts);
    },
    removeFromCart: (state, action) => {
      state.carts.splice(action.payload, 1);
      cartCrud(state.carts);
    },
    clearCart: (state, action) => {
      state.carts = [];
      clearCart();
    },
    clear: (state, action) => {
      state.carts = [];
      state.user = null;
      clearAll();
    }

  }
});
export const { addToCart, clear, removeFromCart, updateCart, addUser } = cartSlice.actions;
export default cartSlice.reducer;



