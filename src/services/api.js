import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  withCredentials: true,
});

// Add interceptors for token refresh if needed
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Refresh token logic
    return Promise.reject(error);
  }
);

export default api;
