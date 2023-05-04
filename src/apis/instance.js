import axios from 'axios';

export const instance = axios.create();

instance.interceptors.request.use(
  (config) => {
    console.info('calling api');
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
