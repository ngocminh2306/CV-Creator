import axios from 'axios'

export const HTTP = axios.create({
  // baseURL: `http://171.244.50.106:83/api`,
  url: `https://truesales.vn/api`,
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token')
  }
})
