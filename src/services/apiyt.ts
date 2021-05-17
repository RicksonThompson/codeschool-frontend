import axios from 'axios';

const apiyt = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

export default apiyt;
