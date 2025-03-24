import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_API 

// Register a new user
export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/auth/register`, userData);
};

// Login with email and password
export const loginUser = async (credentials) => {
  return await axios.post(`${API_URL}/auth/login`, credentials);
};

// Register with Google
export const googleSignin = async (userData) => {
  return await axios.post(`${API_URL}/auth/google-signup`, userData);
};

// Login with Google
export const googleLogin = async (credential) => {
  return await axios.post(`${API_URL}/auth/google-login`, { credential });
};

// Get current user profile
export const getCurrentUser = async () => {
  const token = localStorage.getItem("token");
  
  if (!token) {
    throw new Error("No authentication token found");
  }
  
  return await axios.get(`${API_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

// Logout user
export const logoutUser = () => {
  localStorage.removeItem("token");
};