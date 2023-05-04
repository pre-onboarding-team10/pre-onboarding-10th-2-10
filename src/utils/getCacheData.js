import { CACHE_EXPIRATION_TIME } from '../store/cache';

const getCacheData = (cache, keyword) => {
  if (cache[keyword]) {
    const { timeStamp, data } = cache[keyword];
    const expirationTime = timeStamp + CACHE_EXPIRATION_TIME;

    if (expirationTime < Date.now()) {
      cache[keyword] = {};
    } else {
      return data;
    }
  } else {
    return null;
  }
};

export default getCacheData;
