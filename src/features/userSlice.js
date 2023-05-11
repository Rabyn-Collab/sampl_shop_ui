import { createSlice } from "@reduxjs/toolkit";
import { addUser, clearAll, getCart, getUser } from "./localStorage";




const initialState = {
  user: getUser(),
  carts: getCart()
};


export const userSlice = createSlice({
  initialState,
  name: 'userInfo',
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      addUser(state.user);
    },
    setCart: (state, action) => {

    },
    updateCart: (state, action) => {

    },
    clearCart: (state, action) => {

    },
    clearData: (state, action) => {
      state.user = null;
      state.carts = [];
      clearAll();
    },

  }
});
export const { clearData, setUser } = userSlice.actions;

export default userSlice.reducer;