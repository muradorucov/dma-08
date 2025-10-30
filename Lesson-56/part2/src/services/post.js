import { api } from "../api"

export const getAllPosts = async () => {
  const res = await api.get("/posts")
  if (!res.data) {
    throw new Error("Post fetch error");
  }
  return res.data;
}

