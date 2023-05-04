const now = new Date();

export const setExpireTime = (keyword) => {
  const itemKey = localStorage.getItem(keyword);

  if (!itemKey) {
    return null;
  }

  const item = JSON.parse(itemKey);
  if (now.getTime() > item.expireTime) {
    localStorage.removeItem(keyword);
  }
};
