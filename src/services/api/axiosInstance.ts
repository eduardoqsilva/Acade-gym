import axios from 'axios'

export const Api = axios.create({
  baseURL: 'https://acade-mock-api.vercel.app',
})
