import axios from "axios";

const baseApiUrl = `${process.env.REACT_APP_COMMON_BASE_URL}${process.env.REACT_APP_USERS_BASE_URL}`;

export const createUser = async (payload) => {
  const createUserEndpoint = `${baseApiUrl}`;

  const { data: apiResponse } = await axios.post(createUserEndpoint, payload);

  return apiResponse;
};

export const editUser = async (userId, payload) => {
  const editUserEndpoint = `${baseApiUrl}/${userId}`;
  const { data: apiResponse } = await axios.put(editUserEndpoint, payload);

  return apiResponse;
};

export const retrieveUser = async (userId) => {
  const getUserEndpoint = `${baseApiUrl}/${userId}`;
  const { data: apiResponse } = await axios.get(getUserEndpoint);

  return apiResponse;
};

export const retrieveAllUsers = async () => {
  const getAllUsersEndpoint = `${baseApiUrl}/all`;
  const { data: apiResponse } = await axios.get(getAllUsersEndpoint);

  return apiResponse;
};

export const removeUser = async (userId) => {
  const removeUserEndpoint = `${baseApiUrl}/${userId}`;
  const { data: apiResponse } = await axios.delete(removeUserEndpoint);

  return apiResponse;
};
