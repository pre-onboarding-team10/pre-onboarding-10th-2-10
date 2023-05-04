const getSuggestionsFromStorage = (keyword) => {
  const stringData = localStorage.getItem(keyword);

  if (!stringData) return null;

  const data = JSON.parse(stringData);
  const { suggestions, expireTime } = data;

  return Date.now() < expireTime ? suggestions : null;
};

const setSuggestionsInStorage = (keyword, suggestions) => {
  const ONE_DAY = 1000 * 60 * 60 * 24;

  const data = {
    suggestions,
    expireTime: Date.now() + ONE_DAY,
  };

  const stringData = JSON.stringify(data);
  localStorage.setItem(keyword, stringData);
};

export { getSuggestionsFromStorage, setSuggestionsInStorage };
