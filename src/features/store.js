import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import { authApi } from "./auth/authApi";



export const store = configureStore({
  reducer: {
    userInfo: userReducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    authApi.middleware
  ])
});