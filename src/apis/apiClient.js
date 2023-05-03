import axios from 'axios';

const HOST = '/api/v1/';

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
      withCredentials: true,
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

  async getRecommendedKeywordsAPI(keyword) {
    if (keyword === '') return [];
    return await this.#get(`search-conditions/?name=${keyword}`);
  }
}

export const apiClient = new ApiClient({ HOST });
