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
          state.data = action.meta.arg;
        },
      }
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
      }
    ),
    userLoggedOut: (state) => {
      state = initialState;
      return state;
    },
  }),
});

// Action creators are generated for each case reducer function
export const { userRegistered, userLoggedIn, userLoggedOut } =
  userSlice.actions;

export default userSlice.reducer;
