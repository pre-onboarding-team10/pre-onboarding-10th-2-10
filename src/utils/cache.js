import { apiClient } from '../apis/apiClient';

const KEY = 'expire';
const EXPIRETIME = 60 * 1000; //1분

export function createFetchResponse(axiosResponse) {
  const { data, status, statusText, headers } = axiosResponse;
  const newHeaders = setExpireTime(headers);
  const fetchResponse = new Response(JSON.stringify(data), {
    status,
    statusText,
    headers: newHeaders,
  });
  return fetchResponse;
}

export function setExpireTime(headers) {
  const newHeaders = new Headers(headers);
  newHeaders.set(KEY, new Date(Date.now() + EXPIRETIME).toUTCString());
  return newHeaders;
}

export async function isExpiredTime(responseCache) {
  const expireTime = await responseCache.headers.get(KEY);
  return Date.now() - new Date(expireTime).getTime() > 0;
}

export async function hasCacheKey(cacheStorage, url) {
  return Boolean(await cacheStorage.match(url));
}

export async function putCacheStorage(cacheStorage, keyword, url) {
  const axiosResponse = await apiClient.getKeywords(keyword);
  const fetchResponse = createFetchResponse(axiosResponse);
  await cacheStorage.put(url, fetchResponse);
  return axiosResponse.data;
}

export async function getCacheData(cacheStorage, keyword, url) {
  const responseCache = await cacheStorage.match(url);
  const expiredTimeBoolean = isExpiredTime(responseCache);
  return expiredTimeBoolean
    ? responseCache.json()
    : putCacheStorage(cacheStorage, keyword, URL);
}
