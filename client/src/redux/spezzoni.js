import { buildCreateSlice, asyncThunkCreator } from "@reduxjs/toolkit";
import * as spezzoniApi from "../api/spezzoni";

const initialState = { loading: false, data: undefined, error: undefined };
const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const spezzoniSlice = createSlice({
  name: "spezzoni",
  initialState,
  reducers: (create) => ({
    getAllSpezzoni: create.asyncThunk(
      async () => await spezzoniApi.getAllSpezzoni(),
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
    getUserSpezzoni: create.asyncThunk(
      async (userId) => await spezzoniApi.getUserSpezzoni(userId),
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
    getSpezzoniByString: create.asyncThunk(
      async (filter) => await spezzoniApi.getSpezzoniByName(filter),
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
    addProduct: create.asyncThunk(
      async (spezzone) => await spezzoniApi.addSpezzone(spezzone),
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
          state.data.push(action.payload);
        },
      }
    ),
    setProductSelled: create.asyncThunk(
      async (spezzoneId) => await spezzoniApi.setSpezzoneSelled(spezzoneId),
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
          state.data?.map((spezzone) =>
            spezzone.id === action.meta.arg
              ? { ...spezzone, aviable: false }
              : spezzone
          );
        },
      }
    ),
    deleteProduct: create.asyncThunk(
      async (spezzoneId) => await spezzoniApi.deleteSpezzone(spezzoneId),
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
          state.data?.filter((spezzone) => spezzone.id !== action.meta.arg);
        },
      }
    ),
  }),
});

// Action creators are generated for each case reducer function
export const {
  getAllSpezzoni,
  getUserSpezzoni,
  getSpezzoniByString,
  addProduct,
  deleteProduct,
  setProductSelled,
} = spezzoniSlice.actions;

export default spezzoniSlice.reducer;
