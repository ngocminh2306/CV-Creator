import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `http://171.244.50.106:83/api`,
  headers: {
    Authorization: 'Bearer '+localStorage.token
  }
})