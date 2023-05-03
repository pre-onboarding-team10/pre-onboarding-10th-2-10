import axios from 'axios';

const BASE_URL = 'https://api.clinicaltrialskorea.com/';
const API_VERSION = 'api/v1/';
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
      return response;
    } catch (e) {
      if (e.response) throw e.response;
      throw e;
    }
  }

  async #get(path) {
    return await this.#request('GET', path);
  }

  async getCachedKeywords(keyword) {
    const URL = `${BASE_URL}${API_VERSION}search-conditions/?name=${keyword}`;
    const cacheStorage = await caches.open('keyword');
    const responseCache = await cacheStorage.match(URL);

    try {
      if (responseCache) return await responseCache.json();
      else {
        const { data, status, statusText, headers } = await this.getKeywords(
          keyword
        );
        const fetchResponse = new Response(JSON.stringify(data), {
          status,
          statusText,
          headers,
        });
        await cacheStorage.put(URL, fetchResponse);
        return data;
      }
    } catch (err) {
      alert(err);
    }
  }

  async getKeywords(keyword) {
    return await this.#get(`search-conditions/?name=${keyword}`);
  }
}

export const apiClient = new ApiClient({
  HOST: API_VERSION,
});
