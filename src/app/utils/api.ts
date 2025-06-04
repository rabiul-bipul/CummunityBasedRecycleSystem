import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export const api = axios.create({
  baseURL: API_URL, // Base URL for the API
  withCredentials: true, // For cookies if needed
});

// Function to set the Authorization token
export const setAuthToken = (token: string | null) => {
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete api.defaults.headers.common['Authorization']; // Remove token if null
    }
  };
  
  // Fetch admin users
  export const fetchAdminUsers = async () => {
    const response = await api.get('/admin/users');
    return response.data;
  };

  export const toggleUserStatus = async (userId: number) => {
    const response = await axios.put(`/admin/users/${userId}/active`);
    return response.data;
  };
  

export default api;
