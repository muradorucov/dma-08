import { api } from "../../api"

export const getAllToursForAdmin = async () => {
  const res = await api.get("/tours/for-admin");

  return res.data
}


export const createTourService = async (tourData) => {

  const formData = new FormData();
  formData.append("title", tourData.title);
  formData.append("location", tourData.location);
  formData.append("expiredDate", tourData.expiredDate);
  formData.append("isActive", tourData.isActive);

  for (let i = 0; i < tourData.image.length; i++) {
    formData.append("image", tourData.image[i]);
  }
  // formData
  const res = await api.post("/tours", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });

  return res.data
}