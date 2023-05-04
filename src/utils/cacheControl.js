function getDataFromCache(keyword) {
  const cache = localStorage.getItem(`suggestion-${keyword}`);
  if (cache) {
    const { data, expireTime: cacheExpireTime } = JSON.parse(cache);
    if (new Date().getTime() < cacheExpireTime) {
      return data;
    }
  }
  return null;
}

function setCache(keyword, data, expireTime) {
  const cache = {
    data,
    expireTime: new Date().getTime() + expireTime * 1000,
  };
  localStorage.setItem(`suggestion-${keyword}`, JSON.stringify(cache));
}

export { getDataFromCache, setCache };
