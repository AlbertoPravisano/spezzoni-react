import { buildCreateSlice, asyncThunkCreator } from "@reduxjs/toolkit";
import * as spezzoniApi from "../api/spezzoni";

const initialState = { loading: false, data: undefined, error: undefined };
const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const productSlice = createSlice({
  name: "products",
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
          state.data = action.meta.arg;
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
    setProductSelled: (products, action) => {
      const productId = action.payload;
      const product = products.find((product) => product.id !== productId);
      product.selled = true;
    },
    deleteProduct: (products, action) => {
      const productId = action.payload;
      products = products.filter((product) => product.id !== productId);
    },
  }),
});

// Action creators are generated for each case reducer function
export const {
  getAllSpezzoni,
  getUserSpezzoni,
  getSpezzoniByString,
  addProduct,
  deleteProduct,
} = productSlice.actions;

export default productSlice.reducer;
