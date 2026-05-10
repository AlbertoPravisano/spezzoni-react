import { buildCreateSlice, asyncThunkCreator } from "@reduxjs/toolkit";
import * as userApi from "../api/user";

const initialState = { loading: false, error: undefined, data: undefined };
const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: (create) => ({
    userRegistered: create.asyncThunk(
      async (form) => await userApi.register(form),
      {
        pending: (state) => {
          state.loading = true;
        },
        rejected: (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        },
        fulfilled: (state, action) => {
          state.loading = false;
          state.error = undefined;
          state.data = action.payload;
        },
      },
    ),
    userLoggedIn: create.asyncThunk(
      async ({ email, password }) => await userApi.signin(email, password),
      {
        pending: (state) => {
          state.loading = true;
        },
        rejected: (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        },
        fulfilled: (state, action) => {
          state.loading = false;
          state.error = undefined;
          state.data = action.payload;
        },
      },
    ),
    userSessionRestored: create.asyncThunk(
      async () => await userApi.restoreSession(),
      {
        pending: (state) => {
          state.loading = true;
        },
        rejected: (state) => {
          state.loading = false;
        },
        fulfilled: (state, action) => {
          state.loading = false;
          state.data = action.payload;
        },
      },
    ),
    userLoggedOut: (state) => {
      userApi.signout();
      state = initialState;
      return state;
    },
  }),
});

// Action creators are generated for each case reducer function
export const {
  userRegistered,
  userLoggedIn,
  userLoggedOut,
  userSessionRestored,
} = userSlice.actions;

export default userSlice.reducer;
