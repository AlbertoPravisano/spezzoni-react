import * as yup from "yup";

const MIN_LENGTH = {
  name: 2,
  city: 1,
  country: 2,
};

const MAX_LENGTH = {
  name: 50,
  city: 30,
  country: 30,
  email: 30,
};

export const getIdUserByCredentials = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        usr: yup.string().required(),
        psw: yup.string().required(),
      }),
    },
  },
};

export const getUser = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup.number().required(),
      }),
    },
  },
};

export const addUser = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        name: yup.string().min(MIN_LENGTH.name).max(MAX_LENGTH.name),
        surname: yup.string().min(MIN_LENGTH.name).max(MAX_LENGTH.name),
        email: yup.string().email().max(MAX_LENGTH.email),
        city: yup.string().min(MIN_LENGTH.city).max(MAX_LENGTH.city),
        birthday: yup.date(),
        password: yup.string(),
      }),
    },
  },
};

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

export const removeUser = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup.number().required(),
      }),
    },
  },
};
