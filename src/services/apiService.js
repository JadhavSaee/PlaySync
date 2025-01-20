import axios from 'axios';
const API_BASE_URL = 'https://api.riotgames.com'
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const login = async (email, password) => {
  try {
    const response = await apiClient.post('/auth/login', { email, password });
    return response.data; 
  } catch (error) {
    console.error('Error during login:', error);
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

const register = async (email, password, username) => {
  try {
    const response = await apiClient.post('/auth/register', { email, password, username });
    return response.data; 
  } catch (error) {
    console.error('Error during registration:', error);
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

const getUserData = async (userId) => {
  try {
    const response = await apiClient.get(`/users/${userId}`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw new Error('Failed to fetch user data');
  }
};
const updateUser = async (userId, userData) => {
  try {
    const response = await apiClient.put(`/users/${userId}`, userData);
    return response.data; 
  } catch (error) {
    console.error('Error updating user:', error);
    throw new Error('Failed to update user');
  }
};

export default {
  login,
  register,
  getUserData,
  updateUser,
};
