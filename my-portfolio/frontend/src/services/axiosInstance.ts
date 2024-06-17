import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5001', // Set the base URL from environment variable or default to localhost
});

export default instance;
