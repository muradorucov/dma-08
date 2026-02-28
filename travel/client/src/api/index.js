import axios from 'axios';

const localApiUrl = import.meta.env.VITE_LOCAL_API_URL;
const globalApiUrl = import.meta.env.VITE_GLOBAL_API_URL;


export const api = axios.create({
  baseURL: localApiUrl,
  withCredentials: true
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status) {
      // Handle unauthorized access globally
      throw new Error(error.response.data.message || 'An error occurred');
    }
  }
);