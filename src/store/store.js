import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/authSlice";
import categoryReducer from "./slices/categories/categorySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
  },
});
