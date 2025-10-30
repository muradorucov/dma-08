import { api } from "../api";

export const getAllUsers = async () => {
  const res = await api.get("/users")
  if (!res.data) {
    throw new Error("Users fetch error");
  }
  return res.data;
}
