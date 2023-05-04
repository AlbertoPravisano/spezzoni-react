import axios from "axios";

const users = axios.create({
  baseURL: process.env.REACT_APP_USERS_BASE_URL,
  timeout: Number(process.env.REACT_APP_USERS_TIMEOUT),
  headers: {
    "Content-Type": "application/json",
  },
});

export const getUsers = async () => {
  return await users.post("/users");
};
