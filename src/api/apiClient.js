import axios from 'axios';

class ApiClient {
  #host = '';

  constructor(host) {
    this.#host = host.replace(/(.*)(\/$)/, '$1');
  }

  async #request(method, path) {
    const url = `${this.#host}/${path}`;

    const config = {
      url,
      method,
    };

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

  async getSuggestions(keyword) {
    return await this.#get('?name=' + keyword);
  }
}

const apiClient = new ApiClient('/api/v1/search-conditions/');

export default apiClient;
