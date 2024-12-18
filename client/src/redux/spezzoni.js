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
    userRegistered: create.asyncThunk(
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
    retreiveUserProducts: (products, action) => {
      const userId = action.payload;
      console.log(userId);
      products = [];
    },
    retreiveProductsByString: (products, action) => {
      const string = action.payload;
      console.log(string);
      products = [];
    },
    addProduct: (products, action) => {
      const product = action.payload;
      products.push(product);
    },
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
  retreiveUserProducts,
  retreiveProductsByString,
  addProduct,
  deleteProduct,
} = productSlice.actions;

export default productSlice.reducer;
