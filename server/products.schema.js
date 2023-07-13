import * as yup from "yup";

const getSchema = (origin, shape) => ({
  schema: {
    [origin]: {
      yupSchema: yup.object().shape(shape),
    },
  },
});

export const addProduct = getSchema("body", {
  idSeller: yup.number().required(),
  name: yup.string().required(),
  price: yup.number(),
  tags: yup.array(yup.string()),
});

export const getProduct = getSchema("params", {
  id: yup.number().required(),
});

export const getProductByStr = getSchema("params", {
  str: yup.string().required(),
});
