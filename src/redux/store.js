import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/user/userSlice";
import productReducer from "./features/product/productSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productReducer,
  },
});

export default store;
