const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

let authToken = null;

export const setToken = (token) => {
  authToken = token;
};

export const getToken = () => authToken;

export const clearToken = () => {
  authToken = null;
};

const request = async (path, options = {}) => {
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (authToken) {
    headers["Authorization"] = `Bearer ${authToken}`;
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || `Request failed: ${response.status}`);
  }

  if (response.status === 204) return null;
  return response.json();
};

export const get = (path) => request(path);

export const post = (path, body) =>
  request(path, { method: "POST", body: JSON.stringify(body) });

export const put = (path, body) =>
  request(path, { method: "PUT", body: JSON.stringify(body) });

export const del = (path) => request(path, { method: "DELETE" });
