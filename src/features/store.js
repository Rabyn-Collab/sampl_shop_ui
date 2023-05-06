import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import { authApi } from "./auth/authApi";
import { productApi } from "./crud/productApi";



export const store = configureStore({
  reducer: {
    userInfo: userReducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    authApi.middleware,
    productApi.middleware
  ])
});