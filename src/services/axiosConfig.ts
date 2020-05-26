import axios, { AxiosInstance } from 'axios';
const baseURL: string = 'http://159.89.233.98:8082/';

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
