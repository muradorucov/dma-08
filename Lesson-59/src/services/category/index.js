import { api } from "../../api"

export const getAllCategoriesForAdmin = async () => {
  const res = await api.get("/category/for-admin");
  return res.data
}
