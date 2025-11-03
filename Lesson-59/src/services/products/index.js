import { api } from "../../api"

export const getAllProductsForAdmin = async () => {
  const res = await api.get("/product/for-admin");
  return res.data
}
