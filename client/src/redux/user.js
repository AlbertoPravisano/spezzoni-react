import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: undefined };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      const user = action.payload;
      // API call to products
      state.user = user;
    },
    userLoggedOut: (state) => {
      state.user = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLoggedIn, userLoggedOut } = userSlice.actions;

export default userSlice.reducer;
