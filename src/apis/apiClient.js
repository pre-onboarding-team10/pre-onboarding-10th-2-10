import axios from 'axios';
import {
  getSuggestionsFromStorage,
  setSuggestionsInStorage,
} from '../utils/storage';

class ApiClient {
  #options = {};

  constructor(options) {
    this.#options.HOST = options.HOST.replace(/(.*)(\/$)/, '$1');
  }

  async #request(method, path, data) {
    let url = `${this.#options.HOST}/${path}`;

    const config = {
      url,
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    config.data = JSON.stringify(data);

    try {
      const response = await axios.request(config);
      return response.data;
    } catch (e) {
      if (e.response) throw e.response;
      throw e;
    }
  }

  async #get(path) {
    return await this.#request('GET', path);
  }

  async getKeyword(keyword) {
    let suggestions = getSuggestionsFromStorage(keyword);
    if (suggestions) return suggestions;

    suggestions = await this.#get(`?name=${keyword}`);
    setSuggestionsInStorage(keyword, suggestions);
    return suggestions;
  }
}

export const apiClient = new ApiClient({
  HOST: 'https://api.clinicaltrialskorea.com/api/v1/search-conditions/',
});
