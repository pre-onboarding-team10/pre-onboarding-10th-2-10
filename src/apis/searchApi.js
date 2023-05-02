import apiClient from './apiClient';

export const getKeywords = async (keyword) => {
  const response = await apiClient.get(
    `/v1/search-conditions/?name=${keyword}`
  );
  return response.data;
};
