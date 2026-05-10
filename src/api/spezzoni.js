import * as client from "./client";

export const getAllSpezzoni = async () => {
  return client.get("/api/spezzoni");
};

export const getUserSpezzoni = async (userId) => {
  return client.get(`/api/spezzoni?userId=${encodeURIComponent(userId)}`);
};

export const getSpezzoniByName = async (searchString) => {
  return client.get(`/api/spezzoni?search=${encodeURIComponent(searchString)}`);
};

export const addSpezzone = async ({ name, owner, quantity }) => {
  return client.post("/api/spezzoni", {
    name,
    ownerId: owner,
    quantity,
    aviable: true,
  });
};

export const deleteSpezzone = async (spezzoneId) => {
  return client.del(`/api/spezzoni/${spezzoneId}`);
};

export const setSpezzoneSelled = async (spezzoneId) => {
  return client.put(`/api/spezzoni/${spezzoneId}`, { aviable: false });
};
