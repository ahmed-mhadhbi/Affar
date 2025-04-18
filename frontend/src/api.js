import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:5000/api', 
});

//include the token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Get it
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Add
  }
  return config;
});

export default api; // Export axios