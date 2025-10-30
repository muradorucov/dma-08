import { api } from "../../api"

export const getAllContacts = async () => {
  const res = await api.get("/contact");
  return res.data
}

export const changeStatus = async (id) => {
  const res = await api.patch(`/contact/${id}`);
  return res.data
}