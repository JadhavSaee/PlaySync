import axios from 'axios';
const API_BASE_URL = 'https://api.riotgames.com';

const authService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password,
      });
      return response.data; 
    } catch (error) {
      console.error('Error during login:', error);
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },

  register: async (email, password, username) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, {
        email,
        password,
        username,
      });
      return response.data; 
    } catch (error) {
      console.error('Error during registration:', error);
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  },
};

export default authService;
