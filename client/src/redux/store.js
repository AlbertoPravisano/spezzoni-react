import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./user";
import products from "./products";

export const store = configureStore({
  reducer: combineReducers({ user, products }),
});
