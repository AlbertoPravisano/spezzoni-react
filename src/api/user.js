import * as client from "./client";
import * as storage from "common/sessionStorage";

export const register = async ({ email, psw, ...otherFields }) => {
  const data = await client.post("/api/auth/register", {
    email,
    password: psw,
    name: otherFields.name,
    surname: otherFields.surname,
    phone: otherFields.phone,
    birthday: otherFields.birthday,
    city: otherFields.city,
  });
  client.setToken(data.token);
  storage.setItem(storage.STORAGE_KEYS.AUTH, data.token);
  return data.user;
};

export const signin = async (email, password) => {
  const data = await client.post("/api/auth/login", { email, password });
  client.setToken(data.token);
  storage.setItem(storage.STORAGE_KEYS.AUTH, data.token);
  return data.user;
};

export const restoreSession = async () => {
  const token = storage.getItem(storage.STORAGE_KEYS.AUTH);
  if (!token) return null;
  client.setToken(token);
  try {
    return await client.get("/api/auth/me");
  } catch {
    client.clearToken();
    storage.deleteItem(storage.STORAGE_KEYS.AUTH);
    return null;
  }
};

export const updateUserData = async (user) => {
  return client.put(`/api/users/${user.id}`, user);
};

export const resetPassword = async (email) => {
  await client.post("/api/auth/reset-password", { email });
};

export const signout = async () => {
  client.clearToken();
  storage.deleteItem(storage.STORAGE_KEYS.AUTH);
};
