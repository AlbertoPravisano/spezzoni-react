import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./user";
import spezzoni from "./spezzoni";

export const store = configureStore({
  reducer: combineReducers({ user, spezzoni }),
});
