import { api } from "../api";

export const getAllComments = async () => {
  const res = await api.get("/comments")
  if (!res.data) {
    throw new Error("Comments fetch error");
  }
  return res.data;
}
