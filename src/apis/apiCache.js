import {
  CACHE_NAME,
  CACHE_BASE_URL,
  HEADER_FETCH_DATE,
  DAY_MILISECOND,
} from '../constant';
import { apiClient } from './apiClient';

class ApiCache {
  async getCacheStorage(keyword) {
    const url = `${CACHE_BASE_URL}/${keyword}`;
    const cacheStorage = await caches.open(CACHE_NAME);
    const cachedResponse = await cacheStorage.match(url);
    return cachedResponse && !this.isCacheValid(cachedResponse)
      ? await cachedResponse.json()
      : await this.setCacheStorage(cacheStorage, url, keyword);
  }

  async setCacheStorage(cacheStorage, url, keyword) {
    const apiResponse = await apiClient.getKeyword(keyword);
    const newResponse = await this.getHeaderResponse(apiResponse);
    cacheStorage.put(url, new Response(JSON.stringify(newResponse)));
    return newResponse.data;
  }

  async getHeaderResponse(response) {
    const copyResponse = JSON.parse(JSON.stringify(response));
    const body = copyResponse;
    const headers = new Headers(copyResponse.headers);
    headers.append(HEADER_FETCH_DATE, new Date().getTime());

    return (
      body,
      {
        data: copyResponse.data,
        status: copyResponse.status,
        statusText: copyResponse.statusText,
        headers: headers,
      }
    );
  }

  isCacheValid(response) {
    if (!response) return false;
    const fetched = response.headers.get(HEADER_FETCH_DATE);
    const today = new Date().getTime();

    return fetched && parseFloat(fetched) + DAY_MILISECOND > today;
  }
}

export const apiCache = new ApiCache();
