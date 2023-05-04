import { CACHE_PREFIX, EXPIRATION_TIME_IN_MS } from '../constants/constants';

const getCacheKey = (key) => {
  return CACHE_PREFIX + key;
};

const cacheData = (key, data) => {
  const cacheEntry = {
    data,
    expiresAt: Date.now() + EXPIRATION_TIME_IN_MS,
  };
  localStorage.setItem(getCacheKey(key), JSON.stringify(cacheEntry));
};

const getFromCache = (key) => {
  const cacheEntry = localStorage.getItem(getCacheKey(key));
  if (cacheEntry) {
    const { data, expiresAt } = JSON.parse(cacheEntry);
    if (Date.now() < expiresAt) {
      return data;
    } else {
      localStorage.removeItem(getCacheKey(key));
    }
  }

  return null;
};

const startCacheCleanUpInterval = () => {
  const cleanUpIntervalId = setInterval(() => {
    const now = Date.now();
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith(CACHE_PREFIX)) {
        const cacheEntry = localStorage.getItem(key);
        if (cacheEntry) {
          const { expiresAt } = JSON.parse(cacheEntry);
          if (now >= expiresAt) {
            localStorage.removeItem(key);
          }
        }
      }
    }
  }, EXPIRATION_TIME_IN_MS);

  return cleanUpIntervalId;
};

const stopCacheCleanUpInterval = (intervalId) => {
  clearInterval(intervalId);
};

export {
  cacheData,
  getFromCache,
  startCacheCleanUpInterval,
  stopCacheCleanUpInterval,
};
