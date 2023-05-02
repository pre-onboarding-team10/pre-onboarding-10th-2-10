import { baseInstance } from '../axios/instance';

const getSearchResults = async (query) => {
  try {
    const response = await baseInstance.get(`${query}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getSearchResults };
