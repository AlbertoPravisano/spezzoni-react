export const STORAGE_KEYS = {
  AUTH: "auth",
};

export const setItem = (key, value) => {
  sessionStorage.setItem(key, value);
};

export const getItem = (key) => {
  return sessionStorage.getItem(key);
};

export const deleteItem = (key) => {
  sessionStorage.removeItem(key);
};
