import { api } from "../../api"

export const login = async (body) => {
  const res = await api.post("/auth/login", body);
  return res.data
}

export const logout = async () => {
  const res = await api.post("/auth/logout");
  return res.data
}

export const currentUser = async () => {
  const res = await api.get("/auth/current-user");
  return res.data
}