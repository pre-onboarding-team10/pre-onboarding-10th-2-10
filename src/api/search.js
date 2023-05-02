import axios from 'axios';

export const getSearch = async (keyword) => {
  try {
    const getRes = await axios.get(
      `/api/v1/search-conditions/?name=${keyword}`
    );
    const responseOK = getRes && getRes.status === 200;
    if (responseOK) {
      return getRes.data;
    }
  } catch (error) {
    alert(error);
  }
};
