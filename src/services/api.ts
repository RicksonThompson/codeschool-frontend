import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://www.googleapis.com/youtube/v3',
  baseURL: 'http://localhost:3333',
});

export default api;
