import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
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
  },
});

// Action creators are generated for each case reducer function
export const {
  retreiveUserProducts,
  retreiveProductsByString,
  addProduct,
  deleteProduct,
} = productSlice.actions;

export default productSlice.reducer;
