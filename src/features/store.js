import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import { authApi } from "./auth/authApi";
import { crudApi } from "./crud/crudApi";



export const store = configureStore({
  reducer: {
    userInfo: userReducer,
    [authApi.reducerPath]: authApi.reducer,
    [crudApi.reducerPath]: crudApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    authApi.middleware,
    crudApi.middleware
  ])
});