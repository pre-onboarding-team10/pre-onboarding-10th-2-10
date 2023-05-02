import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const baseAPI = (url, options) => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
  return instance;
};

export const baseInstance = baseAPI(baseURL);
