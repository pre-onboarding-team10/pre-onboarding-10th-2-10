import { CACHE_NAME, CACHE_BASE_URL } from '../constant';
import { apiClient } from './apiClient';

class ApiCache {
  async getCacheStorage(keyword) {
    const url = `${CACHE_BASE_URL}/${keyword}`;
    const cacheStorage = await caches.open(CACHE_NAME);
    const cachedResponse = await cacheStorage.match(url);

    return cachedResponse
      ? await cachedResponse.json()
      : await this.setCacheStorage(cacheStorage, url, keyword);
  }

  async setCacheStorage(cacheStorage, url, keyword) {
    const apiResponse = await apiClient.getKeyword(keyword);
    cacheStorage.put(url, new Response(JSON.stringify(apiResponse.data)));
    return apiResponse.data;
  }
}

export const apiCache = new ApiCache();
