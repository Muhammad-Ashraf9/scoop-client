import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/user/userSlice";
import productReducer from "./features/product/productSlice";
import { apiSlice } from "./features/api/apiSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
