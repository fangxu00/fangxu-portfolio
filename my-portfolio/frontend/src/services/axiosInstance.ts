import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://my-portfolio-backend-55efc7b8f88d.herokuapp.com/', // Set the base URL from environment variable or default to localhost
});

export default instance;
