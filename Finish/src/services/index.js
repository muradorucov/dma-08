import { api } from "../api";

export async function login(body) {
  const res = await api.post("/auth/login", body);
  if (!res.data) {
    throw new Error("Login olmadi");
  }
  return res.data
}


export async function currentUser() {
  const res = await api.get("/auth/me", {
    headers: {
      'Authorization': `Bearer `,
    },
  });
  if (!res.data) {
    throw new Error("Istifadeci tapilmadi");
  }
  return res.data
}

export async function cartsByUser(id) {
  const res = await api.get("/carts/user/" + id);
  if (!res.data) {
    throw new Error("Carts tapilmadi");
  }
  return res.data
}