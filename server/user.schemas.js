import * as yup from "yup";

const MIN_LENGTH = {
  name: 2,
  city: 1,
  country: 2,
  phone: 6,
  birthday: 10,
};

const MAX_LENGTH = {
  name: 50,
  city: 30,
  country: 30,
  email: 30,
  phone: 12,
  birthday: 10,
};

const getSchema = (origin, shape) => ({
  schema: {
    [origin]: {
      yupSchema: yup.object().shape(shape),
    },
  },
});

export const getIdUserByCredentials = getSchema("body", {
  usr: yup.string().required(),
  psw: yup.string().required(),
});

export const getUser = getSchema("params", {
  id: yup.number().required(),
});

export const addUser = getSchema("body", {
  name: yup.string().min(MIN_LENGTH.name).max(MAX_LENGTH.name),
  surname: yup.string().min(MIN_LENGTH.name).max(MAX_LENGTH.name),
  email: yup.string().email().max(MAX_LENGTH.email),
  phone: yup.string().min(MIN_LENGTH.phone).max(MAX_LENGTH.phone),
  city: yup.string().min(MIN_LENGTH.city).max(MAX_LENGTH.city),
  birthday: yup.string().min(MIN_LENGTH.birthday).max(MAX_LENGTH.birthday),
  password: yup.string(),
});

export const updateUser = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup.number().required(),
      }),
    },
    body: {
      yupSchema: yup.object().shape({
        name: yup.string().min(MIN_LENGTH.name).max(MAX_LENGTH.name),
        email: yup.string().email(),
        city: yup.string().min(MIN_LENGTH.city).max(MAX_LENGTH.city),
        country: yup.string().min(MIN_LENGTH.country).max(MAX_LENGTH.country),
      }),
    },
  },
};

export const removeUser = getSchema("params", {
  id: yup.number().required(),
});
