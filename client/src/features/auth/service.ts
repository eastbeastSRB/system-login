import axios from 'axios'

const API_URL = '/users/v1'

// Register user
const signup = async (userData) => {}

// Login user
const login = async (userData) => {}

// Logout user
const logout = () => {}

const authService = {
  signup,
  logout,
  login,
}

export default authService